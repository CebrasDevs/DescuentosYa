import Link from "next/link";

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
    <div className=" flex h-full w-full bg-slate-800 ">
      <div className=" flex p-1 w-full h-full">
        <Link href={"/profile"} className="mr-5">
          Home
        </Link>
        <Link href={"/brands"} className="mr-5">
          About
        </Link>
      </div>
      <div className="flex ">
      <button className="inline-flex items-center bg-yellow-500 border-0 py-2 px-4 mt-4 top-0 left-0">
        Sign Up
      </button>
      <button className="inline-flex items-center bg-yellow-500 border-0 py-2 px-4 mt-4 top-0 left-0">
        Log in
      </button>

      </div>
      
    </div>
  );
}
