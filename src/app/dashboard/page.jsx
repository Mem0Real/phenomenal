"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const initValues = {
    title: "",
    desc: "",
    image: "",
    content: "",
  };

  const [input, setInput] = useState(initValues);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = input.title;
    const desc = input.desc;
    const image = input.image;
    const content = input.content;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      setInput(initValues);
    } catch (err) {
      console.log(err);
    }
  };
  if (session.status === "authenticated") {
    return (
      <div className="flex items-start gap-36">
        <div className="flex-1 flex flex-col-reverse gap-12 px-24">
          {isLoading
            ? "Loading"
            : data?.map((post) => (
                <div key={post._id} className="relative">
                  <h2 className="text-xl font-black underline">{post.title}</h2>
                  <div className="flex-1 relative h-48">
                    <Image src={post.image} fill={true} alt="userImg" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between items-center gap-4">
                    <h2>{post.desc}</h2>
                    <h2>{post.content}</h2>
                    <span
                      className="absolute -top-3 -right-9 px-3 py-1 text-sm rounded-full bg-red-600 text-white cursor-pointer"
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <form
          className="flex flex-1 flex-col justify-between gap-9 "
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-black text-center text-white">
            Add New Post
          </h1>
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <input
              name="title"
              type="text"
              className="bg-transparent outline-none w-full py-3 peer text-white ps-6"
              tabIndex="0"
              value={input.title}
              onChange={handleChange}
            />
            <label
              htmlFor="title"
              className={`absolute border-r border-neutral-800/80 text-sm text-[#bbb] ${
                !input.title
                  ? "top-3"
                  : "-translate-y-9 border-none text-blue-300/50"
              } -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm`}
            >
              Title
            </label>
          </div>
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <input
              name="desc"
              type="text"
              className="bg-transparent outline-none w-full py-3 peer text-white ps-6"
              tabIndex="0"
              value={input.desc}
              onChange={handleChange}
            />
            <label
              htmlFor="desc"
              className={`absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 ${
                !input.desc
                  ? "top-3"
                  : "-translate-y-9 border-none text-blue-300/50"
              } -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm`}
            >
              Description
            </label>
          </div>
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <input
              name="image"
              type="text"
              className="bg-transparent outline-none w-full py-3 peer text-white ps-6"
              tabIndex="0"
              value={input.image}
              onChange={handleChange}
            />
            <label
              htmlFor="image"
              className={`absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 ${
                !input.image
                  ? "top-3"
                  : "-translate-y-9 border-none text-blue-300/50"
              } -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm`}
            >
              Image
            </label>
          </div>
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <textarea
              name="content"
              id="desc"
              cols="30"
              rows="10"
              className="bg-transparent outline-none peer w-full text-white ps-6 pt-6"
              value={input.content}
              onChange={handleChange}
            ></textarea>
            <label
              htmlFor="content"
              className={`absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 ${
                !input.content
                  ? "top-3"
                  : "-translate-y-9 border-none text-blue-300/50"
              } -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm`}
            >
              Content
            </label>
          </div>
          <div className="mx-auto">
            <button className="px-4 py-3 rounded bg-green-500 text-md text-white">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Dashboard;
