import Image from "next/image";
import React from "react";
import Link from "next/link";

const Portifolio = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-black">Choose a gallery</h1>
      <div className="flex gap-7">
        <Link
          className="relative w-56 h-72 border-4 rounded border-white hover:text-green-600 cursor-pointer"
          href="/portifolio/illustrations"
        >
          <Image
            src="/illustration.png"
            fill={true}
            alt="Illustrations"
            className="object-cover object-left"
          />
          <h1 className="text-3xl font-black absolute bottom-3 end-2">
            Illustrations
          </h1>
        </Link>
        <Link
          className="relative w-56 h-72 border-4 rounded border-white hover:text-green-600 cursor-pointer"
          href="/portifolio/websites"
        >
          <Image
            src="/websites.jpg"
            fill={true}
            alt="Websites"
            className="object-cover object-left"
          />
          <h1 className="text-3xl font-black absolute bottom-3 end-2">
            Websites
          </h1>
        </Link>
        <Link
          className="relative w-56 h-72 border-4 rounded border-white hover:text-green-600 cursor-pointer"
          href="/portifolio/applications"
        >
          <Image
            src="/apps.jpg"
            fill={true}
            alt="Applications"
            className="object-cover object-left"
          />
          <h1 className="text-3xl font-black absolute bottom-3 end-2">
            Applications
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Portifolio;
