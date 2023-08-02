import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

// const links = [
//   {
//     label: "Home",
//     route: "/",
//   },
//   {
//     label: "About",
//     route: "/brands",
//   },
//   {
//     label: "profile",
//     route: "/profile",
//   },
//   {
//     label: "login",
//     route: "/login",
//   },
// ];
// {links.map(({ label, route }) => (
//  <Link href={route}>{label}</Link>
// ))}

export default function Navbar() {
  return (
    <div className=" flex w-full h-24 bg-slate-800">
      <div className="flex w-1/3 h-full items-center">
        <Link href={"/"}>
          <h1>I AM THE LOGO</h1>
        </Link>
      </div>
      <div className=" flex w-1/3 h-full items-center justify-around ">
        <Link className=" text-xl hover:underline" href={"/"}>
          Home
        </Link>
        <Link className=" text-xl hover:underline" href={"/brands"}>
          About
        </Link>
        <Link className=" text-xl hover:underline" href={"/shoppingcart"}>
          <BsCart3 />
        </Link>
      </div>
      <div className="flex w-1/3 h-full items-center justify-end ">
        <Link
          className="flex items-center justify-center bg-red-600 border-0 rounded-2xl h-12 w-1/6 mr-16 text-lg"
          href={"/register"}
        >
          Sign Up
        </Link>
        <Link
          className="flex items-center justify-center bg-red-600 border-0 rounded-2xl h-12 w-1/6 mr-16 text-lg"
          href={"/login"}
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
