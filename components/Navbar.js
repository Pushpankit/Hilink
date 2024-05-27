"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center mx-10 mt-10">
      <Image src="/hilink-logo.svg" alt="Logo" width={70} height={100} />

      <ul className="hidden lg:flex items-center gap-20 p-8 h-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/login">
            <button className="hidden sm:block">Login</button>
          </Link>
        </li>
      </ul>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {menuOpen && (
        <ul className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-5 flex flex-col items-start gap-4 lg:hidden w-full z-10">
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="/service" onClick={toggleMenu}>Service</Link>
          </li>
          <li>
            <Link href="/pricing" onClick={toggleMenu}>Pricing</Link>
          </li>
          <li>
            <Link href="/login" onClick={toggleMenu}>
              <button className="block sm:hidden">Login</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
