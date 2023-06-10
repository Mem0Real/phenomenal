import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10 h-max">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item.id}>
          <div className="flex gap-6">
            <div className="basis-1/3 relative h-56">
              <Image
                src={item.image}
                fill={true}
                alt="1"
                className="object-cover rounded"
              />
            </div>
            <div className="basis-2/3 flex-col justify-center gap-3 flex">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="text-sm text-neutral-300/70 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
