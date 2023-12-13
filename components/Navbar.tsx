"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton title="Sign In" btnType="submit" handleClick={() => {}} />
      </nav>
    </header>
  );
};

export default Navbar;
