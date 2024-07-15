import type { Metadata } from "next";
import { Inter, Lato, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Nibras",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${lato.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
