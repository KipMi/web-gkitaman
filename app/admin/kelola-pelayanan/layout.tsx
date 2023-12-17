import type { Metadata } from 'next';
import KelolaPelayananTabs from './KelolaPelayananTabs';
import pelayananImg from '../assets/img/pelayanan1.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'GKI TC - Pelayanan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-auto min-h-screen m-10">
      <h1>Pengelolaan Pelayanan</h1>
      <KelolaPelayananTabs />
      <div className="border-4 rounded-md h-auto p-5">{children}</div>
    </div>
  );
}
