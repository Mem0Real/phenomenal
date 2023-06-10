import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className="">
      <div className="w-full h-64 relative flex-none items-start">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="About"
          className="object-cover grayscale"
        />
        <div className="flex z-10 flex-col items-start absolute bg-green-500 bg-opacity-90 bottom-6 rounded px-2 start-4 text-xl font-black text-neutral-300">
          <h1 className="text-2xl">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className="flex items-start mt-7 gap-24 justify-center">
        <div className="description flex flex-col flex-1">
          <h1 className="text-3xl mb-4 font-extrabold">Who Are We?</h1>
          <p className="my-3 text-sm font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="my-3 text-sm font-medium text-justify">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="my-3 text-sm font-medium text-justify">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl mb-4 font-extrabold">What We Do</h1>
          <p className="my-3 text-sm font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul className="list-disc">
            <li className="my-3">Creative Illustrations</li>
            <li className="my-3">Dynamic Websites</li>
            <li className="my-3">Fast and Handy Mobile Apps</li>
          </ul>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
