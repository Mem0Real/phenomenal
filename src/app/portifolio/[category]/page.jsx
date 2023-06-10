import Button from "@/components/button/Button";
import Image from "next/image";
import React, { Suspense } from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) return data;
  return notFound();
};

const Category = ({ params: { category } }) => {
  const data = getData(category);

  return (
    <div className="flex gap-12 flex-col">
      <h1 className="text-green-400 text-2xl font-black self-start">
        {category.toUpperCase()}
      </h1>
      {data.map((item) => (
        <div
          className="flex odd:flex-row-reverse gap-4 mt-12 mb-24"
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-4 items-start even:items-end justify-center">
            <h1 className="text-3xl font-black">{item.title}</h1>
            <p className="text-justify">{item.desc}</p>
            <Button url="#" text="btn" />
          </div>
          <div className="flex-1 relative h-[500px]">
            <Suspense fallback={<h1>Loading....</h1>}>
              <Image
                src={item.image}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                alt={item.title}
              />
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
