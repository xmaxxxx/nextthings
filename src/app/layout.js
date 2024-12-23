import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer"

import { Roboto_Mono} from 'next/font/google'
 
const robotomono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfollio",
  description: "Made By AJ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotomono.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
