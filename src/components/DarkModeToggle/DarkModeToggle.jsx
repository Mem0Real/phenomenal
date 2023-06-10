"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className={`w-16 h-7 px-1.5 border-2 border-neutral-300 cursor-pointer rounded-[30px] flex justify-between items-center relative ${
        mode === "light" && "border-neutral-800"
      }`}
      onClick={toggle}
    >
      <div className="relative h-4 w-4">
        <Image
          src="/half-moon.png"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          alt="moon"
        />
      </div>
      <div className="relative h-4 w-4">
        <Image
          src="/sun.png"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          alt="sun"
        />
      </div>

      <div
        className={`w-5 h-5 bg-green-400 rounded-full absolute ease-in-out inline-block ${
          mode === "dark" ? "animate-go_backward" : "animate-go_forward"
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
