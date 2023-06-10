import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

const getData = async (id) => {
  let url;
  if (process.env.NODE_ENV === "development")
    url = `http://localhost:3000/api/posts/${id}`;
  if (process.env.NODE_ENV === "production")
    url = `https://phenomenal.vercel.app/api/posts/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  return res.json();
};

export const generateMetadata = async ({ params: { id } }) => {
  const post = await getData(id);
  return {
    title: `Phenomenal - ${post.title}`,
    description: post.desc,
  };
};

const BlogPost = async ({ params: { id } }) => {
  const data = await getData(id);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-1 flex justify-center items-center gap-2">
        <div className="flex-1 flex flex-col gap-5 items-start">
          <h1 className="text-3xl font-black">{data.title}</h1>
          <p className="text-neutral-400">{data.body}</p>
          <div className="flex items-start justify-start gap-6 relative">
            <div className="relative h-8 w-8">
              <Image
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400"
                fill={true}
                alt="profile_pic"
                className="object-cover rounded-full border-none"
              />
            </div>
            <h1 className="text-md font-medium">{data.username}</h1>
          </div>
        </div>
        <div className="flex-1 relative h-64">
          <Image
            src={data.image}
            fill={true}
            alt="pp"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1 text-justify flex flex-col gap-3 items-start">
        {data.content}
      </div>
    </div>
  );
};

export default BlogPost;
