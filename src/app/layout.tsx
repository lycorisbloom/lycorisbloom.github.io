import type { Metadata } from "next";
import { Montserrat, Kumar_One } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bavistaSoulvare = localFont({
  src: '../../public/fonts/BavistaSoulvare-ALJP2.ttf',
  variable: '--font-bavista-soulvare',
});

const kumarOne = Kumar_One({
  variable: "--font-kumar-one",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Jane Lu Portfolio",
  description: "Jane Lu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.variable} ${kumarOne.variable}  ${bavistaSoulvare.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
