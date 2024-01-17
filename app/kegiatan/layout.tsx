import type { Metadata } from "next";
import Tabs from "../components/Tabs";
import pelayananImg from "../assets/img/bepim.jpg";
import Image from "next/image";
import KegiatanTabs from "./KegiatanTabs";

export const metadata: Metadata = {
  title: "GKI TC - Pelayanan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-80 bg-gray-500 flex justify-center relative items-center">
        <Image
          src={pelayananImg}
          alt="no image"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <h1 className="font-bold text-2xl text-white">Kegiatan</h1>
      </div>
      {/* <KegiatanTabs /> */}
      <div></div>
      {children}
    </>
  );
}
