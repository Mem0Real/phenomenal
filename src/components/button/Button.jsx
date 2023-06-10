import React from "react";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className="px-8 py-2 cursor-pointer bg-green-400/70 border-none rounded-md text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
