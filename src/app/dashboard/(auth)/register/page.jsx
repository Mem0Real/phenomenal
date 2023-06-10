"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <form
        action=""
        className="w-1/3 flex flex-col justify-between gap-9 pb-6"
        onSubmit={handleSubmit}
      >
        <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
          <input
            placeholder="Username"
            name="name"
            type="text"
            className="bg-transparent outline-none w-full py-3 peer text-white text-md lg:ps-6 autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.7)]"
            tabIndex="0"
          />
        </div>
        <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
          <input
            placeholder="Email"
            name="email"
            type="email"
            className="bg-transparent outline-none w-full py-3 peer text-white text-md lg:ps-6 autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.7)]"
            tabIndex="0"
          />
        </div>
        <div className="relative border-2 rounded-md border-neutral-400/20 text-sm text-neutral-600/5 peer">
          <input
            placeholder="Password"
            name="password"
            type="password"
            className="bg-transparent outline-none w-full py-3 peer text-white text-md lg:ps-6 autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.7)]"
            tabIndex="0"
          />
        </div>

        <div className="mx-auto">
          <button
            type="submit"
            className="px-5 py-2 text-lg text-white bg-green-500 border-none rounded-md"
          >
            Register
          </button>
        </div>
      </form>
      {error && "Something Went Wrong"}
      <Link href="/dashboard/login">Login with an existing account.</Link>
    </div>
  );
};

export default Register;
