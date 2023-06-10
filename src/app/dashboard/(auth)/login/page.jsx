"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState(false);

  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form
        action=""
        className="w-1/3 flex flex-col justify-between gap-9 pb-6"
        onSubmit={handleSubmit}
      >
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
            className="px-5 py-2 text-md text-white bg-green-500 border-none rounded-md"
          >
            Login
          </button>
        </div>
      </form>
      {error && "Something Went Wrong"}
      <Link href="/dashboard/login">Login with an existing account.</Link>
      <button
        onClick={() => signIn("google")}
        className="py-4 px-12 bg-neutral-700 rounded-md my-6 border-2 border-white"
      >
        Sign-In Using Google
      </button>
    </div>
  );
};

export default Login;
