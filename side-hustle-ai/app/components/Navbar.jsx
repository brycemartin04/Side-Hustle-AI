import React from "react";
import Link from "next/link";
import Logo from "/Users/brycemartin/Documents/Side-Hustle-AI/side-hustle-ai/public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#23C686] py-[1.65rem] fixed top-0 w-full z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 ">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" width={70} quality={100} />
          <h1 className="text-white text-xl drop-shadow-md font-bold cursor-pointer">
            Side Hustle AI
          </h1>
        </Link>
        <div className="flex gap-8 text-white ">
          <Link
            href="/"
            className="hover:transition-transform transform hover:scale-110 duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/guides"
            className="hover:transition-transform transform hover:scale-110 duration-300"
          >
            Step By Step Guides
          </Link>
          <Link
            href="/ideas"
            className="hover:transition-transform transform hover:scale-110 duration-300"
          >
            Ideas
          </Link>
        </div>
      </div>
    </nav>
  );
}
