import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metaData = {
  title: "Phenomenal Contact Info",
  description: "Contact Page information",
};

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-6xl mb-24 text-center font-semibold">
        Let&apos;s Keep in Touch
      </h1>
      <div className="flex gap-24 items-center">
        <div className="flex-1 relative h-96">
          <Image
            src="/contact.png"
            fill={true}
            alt="Contact Us"
            className="object-contain animate-move "
          />
        </div>
        <form action="" className="flex flex-1 flex-col justify-between gap-9">
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <input
              name="name"
              type="text"
              className="bg-transparent outline-none w-full py-3 peer"
              tabIndex="0"
            />
            <label
              htmlFor="name"
              className="absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm"
            >
              Name
            </label>
          </div>
          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <input
              name="email"
              type="email"
              className="bg-transparent outline-none w-full py-3 peer"
              tabIndex="0"
            />
            <label
              htmlFor="email"
              className="absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm"
            >
              Email
            </label>
          </div>

          <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
            <textarea
              name="description"
              id="desc"
              cols="30"
              rows="10"
              className="bg-transparent outline-none peer w-full"
            ></textarea>
            <label
              htmlFor="description"
              className="absolute border-r border-neutral-800/80 text-sm text-[#bbb] top-3 -start-1 peer-focus:animate-pulse peer-focus:-translate-y-9 peer-focus:border-none peer-focus:text-blue-300/50 transition ease-in-out duration-300 -left-3 px-5 rounded-sm"
            >
              Description
            </label>
          </div>
          <div className="mx-auto">
            <Button url="" text="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
