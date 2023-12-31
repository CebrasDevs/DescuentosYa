"use client"
import Link from "next/link";
import Login from "../../components/Login";

export default function login() {

  return (
    <div>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Descuentos Ya!
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">Welcome again</p>
        </div>
        <Login />
        <p className="text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
}
