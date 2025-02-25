import React from "react";
import Link from "next/link";
import Logo from "../favicon.ico";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#23C686] py-4 fixed top-0 w-full z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 ">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Dojo Helpdesk Logo" width={50} quality={100} />
          <h1 className="text-white text-xl drop-shadow-md font-bold cursor-pointer">
            Side Hustle AI
          </h1>
        </Link>
        <div className="flex gap-8 text-white ">
          <Link href="/" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link href="/ideas" className="hover:text-gray-400">
            Ideas
          </Link>
        </div>
      </div>
    </nav>
  );
}
