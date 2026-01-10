import type { Metadata } from "next";
import { Geist } from 'next/font/google'

import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "STC Bank Tech Task",
  description: "Mohammed Dhabaab Frontend Development Test Task for STC Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
