import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-16">
        {/* <h1
          className={`title text-6xl font-extrabold opacity-50 bg-gradient-to-b ${
            mode === "dark"
              ? " from-emerald-600/25 via-emerald-100 to-neutral-100"
              : "from-green-600 via-emerald-900 to-neutral-950"
          } text-transparent bg-clip-text box-shadow-lg drop-shadow-3xl shadow-black`}
        > */}
        <h1 className="title text-6xl font-extrabold opacity-50 bg-gradient-to-b from-emerald-600/25 via-emerald-100 to-neutral-100 text-transparent bg-clip-text">
          Better design for your digital products.
        </h1>
        <p className="description text-lg pr-6">
          Turning your Idea into Reality. We bring together teams from the
          global tech industry.
        </p>
        <Button url="/portifolio" text="See Our Work" />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          alt=""
          className="w-full h-full object-contain animate-move_home"
        />
      </div>
    </div>
  );
}
