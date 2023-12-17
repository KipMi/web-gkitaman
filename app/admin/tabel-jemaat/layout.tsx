import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GKI TC - Tabel Jemaat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
