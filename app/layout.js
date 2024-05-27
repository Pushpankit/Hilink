import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Hilink",
  description: "Tour around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
