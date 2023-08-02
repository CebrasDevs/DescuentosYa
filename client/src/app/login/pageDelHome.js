'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [session, setSession] = useState(true);

  return (
    <div> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-9xl  ">
          DescuentosYa!
        </h1>

        {session ? <User/> : <Guest/>}

      </main>
    </div>
  );
}



//Sin loguear
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">
        Guest Profile
      </h3>
      <div className="flex justify-center">
        <Link href={'/login'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign In</Link>
      </div>
    </main>
  )
}

//Logueado
function User(){
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">
        User Profile
      </h3>

      <div className="details">
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign Out</button>
      </div>

      <div className="flex justify-center">
        <Link href={'/profile'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Profile</Link>
      </div>
    </main>
  )
}