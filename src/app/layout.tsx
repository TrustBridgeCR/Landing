import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrustBridge',
  description: 'Join TrustBridge to connect lenders and borrowers securely and transparently.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
