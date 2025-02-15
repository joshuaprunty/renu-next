import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from './providers';
import localFont from 'next/font/local'
import { Inter } from "next/font/google";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './subset-plain-regular.woff2',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
 
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Renu',
  description: 'Renu is a platform for students to find courses at Northwestern University.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* <body className={`${inter.variable} antialiased`}> */}
      {/* <body className={`${myFont.variable} antialiased`}> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
