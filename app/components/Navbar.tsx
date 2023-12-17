'use client';

import React from 'react';
import Link from 'next/link';
import Drawer from './Drawer';
import Image from 'next/image';
import gkilogo from '../assets/img/gkilogo.png';

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 m-0 bg-base-100 z-40 shadow-xl">
      <div className="flex-none">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 justify-center">
        <Image src={gkilogo} alt="no logo" className="w-7 h-7" />
        <a href=".." className="btn btn-ghost normal-case text-xl">
          GKI Taman Cibunut
        </a>
      </div>
    </div>
  );
};

export default Navbar;
