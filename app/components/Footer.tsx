import Image from 'next/image';
import React from 'react';
import gkilogo from '../assets/img/gkilogo.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <Image src={gkilogo} alt="no logo" className="w-20 h-20" />
        <h1 className="text-2xl">GKI Taman Cibunut</h1>
      </aside>
      <nav className="w-1/2">
        <header className="footer-title">Alamat Kami</header>
        <p>
          Jl. Van Deventer No.11, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung,
          Jawa Barat 40112
        </p>
      </nav>
      <nav>
        <header className="footer-title">Kontak Kami</header>
        <a className="link link-hover">Email disini</a>
        <a className="link link-hover">No telp disini</a>
      </nav>
    </footer>
  );
};

export default Footer;
