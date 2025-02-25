import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#202f46] py-8">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Brand */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Side Hustle AI Logo"
              width={50}
              quality={100}
            />
            <span className="text-white text-xl font-bold">Side Hustle AI</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-white hover:text-gray-400 text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-white hover:text-gray-400 text-sm"
          >
            Terms of Use
          </Link>
          {/* <Link
            href="/contact"
            className="text-white hover:text-gray-400 text-sm"
          >
            Contact
          </Link> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Side Hustle AI. All rights reserved.
      </div>
    </footer>
  );
}
