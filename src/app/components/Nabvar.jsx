'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import logo from "../../../public/logo.png";
import Image from 'next/image';
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-full bg-red-500 fixed z-[100] shadow-xl h-20'>
      <div className='flex bg-yellow-500 items-center justify-between h-full w-full'>
        <Link href="/">
          <Image src={logo} alt="logo" width={250} height={305} />
        </Link>
        <div>
          <AiOutlineMenu onClick={handleMenu} className="sm:hidden text-2xl cursor-pointer" />
        </div>
      </div>
      {/* Mobile Version Listed Items */}
      <div className={menuOpen ? 'fixed left-0 top-20 w-[50%] h-screen bg-blue-400 ease-in duration-500 flex flex-col justify-start z-50' : 'hidden'}>
        {/* Place your menu items here */}
      
      <div className='flex absolute  top-6 right-6 w-full justify-end items-center'>
        <AiOutlineClose onClick={handleMenu} className='text-2xl '/>
      </div>
      <ul className='flex flex-col justify-center items-center mt-20'>
        <li className='text-2xl text-black mb-4'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-2xl text-black mb-4'>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className='text-2xl text-black mb-4'>
          <Link href="/contact">Contact</Link>
        </li>
        <li className='text-2xl text-black mb-4'>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
