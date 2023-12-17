'use client';

import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Drawer = () => {
  return (
    <div className="drawer sticky top-0 z-40">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-bold">
          {/* Sidebar content here */}
          Main Tabs
          <li className="font-normal">
            <Link href="/">Home</Link>
          </li>
          <li className="font-normal">
            <Link href="/pelayanan/umum">Pelayanan</Link>
          </li>
          <li className="font-normal">
            <Link href="/kegiatan/anak">Kegiatan</Link>
          </li>
          Admin Tabs
          <li className="font-normal">
            <Link href="/admin/tabel-jemaat">Pendataan Jemaat</Link>
          </li>
          <li className="font-normal">
            <Link href="/admin/kelola-kegiatan">Pengelolaan Kegiatan</Link>
          </li>
          <li className="font-normal">
            <Link href="/admin/kelola-pelayanan/umum">
              Pengelolaan Pelayanan
            </Link>
          </li>
          <li>
            <Link className="font-normal" href={'/login'}>
              Admin Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
