"use client";

import { url } from "inspector";
import Image from "next/image";
import churchbg from "./assets/img/gkitcbg.webp";
import KaryawanCard from "./components/KaryawanCard";
import ScrollButton from "./components/ScrollButton";
import { useRef } from "react";
import ReadMoreLess from "./ReadMoreLess";
import KegiatanTerkini from "./KegiatanTerkini";
import KomisiKami from "./KomisiKami";
import CarouselGallery from "./CarouselGallery";
import RenunganComponent from "./RenunganComponent";
import YoutubeVideo from "./YoutubeVideo";

export default function Home() {
  const refScroll = useRef<null | HTMLDivElement>(null);

  return (
    <main className="w-screen">
      <div className="w-full h-auto">
        <div className="w-full h-screen bg-cover bg-gradient-to-t from-base-100 from-5% to-gray-500 to-50% relative items-center flex flex-col justify-center">
          <Image
            src={churchbg}
            alt="no image"
            className="w-full h-full object-cover absolute mix-blend-overlay z-0"
          />
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-3xl text-center text-white z-10">
              Welcome to GKI Taman Cibunut
            </h1>
            <div className="w-1/2 flex flex-col items-center">
              <h1 className="font-bold text-white text-center">
                Working Toward a Brighter Future
              </h1>
            </div>
          </div>
          {/* <ScrollButton label="Tentang Kami" scrollRef={refScroll} /> */}
        </div>
        <div
          className="w-full h-auto flex flex-col justify-center items-center"
          id="sejarah"
          ref={refScroll}
        >
          <div className="lg:w-3/4 w-full m-5 p-5 border-2 rounded-md">
            <h1 className="font-bold my-5 text-center">Renungan Hari Ini</h1>
            <RenunganComponent />
          </div>
          <div className="w-full flex flex-col items-center p-5">
            <div className="lg:w-3/4 flex flex-col items-center">
              <h1 className="font-bold text-xl text-center">Video Ibadah</h1>
              <YoutubeVideo videoUrl="https://www.youtube.com/watch?v=xNRJwmlRBNU" />
            </div>
          </div>
          <h1 className="font-bold">Pendeta Kami</h1>
          {/* <CarouselGallery /> */}
        </div>
        <div className="h-auto lg:px-20 flex flex-col items-center my-52">
          <h1 className="text-2xl text-center">Komisi Gereja</h1>
          <div className="flex flex-wrap flex-col justify-around lg:w-3/4 w-full p-10">
            <KomisiKami title="Komisi Dewasa">
              Empowering Others gkitamancibunutbandung is dedicated to putting
              our San Francisco community first. Our Community Outreach program
              provides a much-needed service for those in dire need. Lend a
              helping hand and join our efforts today.
            </KomisiKami>
            <KomisiKami title="Komisi Remaja & Pemuda">
              Empowering Others gkitamancibunutbandung is dedicated to putting
              our San Francisco community first. Our Community Outreach program
              provides a much-needed service for those in dire need. Lend a
              helping hand and join our efforts today.
            </KomisiKami>
            <KomisiKami title="Komisi Anak">
              Empowering Others gkitamancibunutbandung is dedicated to putting
              our San Francisco community first. Our Community Outreach program
              provides a much-needed service for those in dire need. Lend a
              helping hand and join our efforts today.
            </KomisiKami>
            <KomisiKami title="Komisi Usia Lanjut">
              Empowering Others gkitamancibunutbandung is dedicated to putting
              our San Francisco community first. Our Community Outreach program
              provides a much-needed service for those in dire need. Lend a
              helping hand and join our efforts today.
            </KomisiKami>
          </div>
        </div>
        <div className=" w-full my-24">
          <h1 className="font-bold text-xl text-center">Kegiatan Kami</h1>
          <div className="w-full flex flex-col justify-around">
            <KegiatanTerkini />
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
