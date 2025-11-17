import type { Metadata } from "next";
import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const schibstedSans = Schibsted_Grotesk({
  variable: "--font-schibsted-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Param Hansa Philanthropies",
  description: "Supporting research where compute meets life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${schibstedSans.variable} antialiased`}
      >
        <div className="xl:block">{children}</div>

        {/* <div className="flex flex-col items-center text-center text-lg justify-center w-screen h-screen xl:hidden animate-pulse">
          {" "}
          Mobile website is work in progress, <br /> Please open on
          desktop or laptop.
        </div> */}
      </body>
    </html>
  );
}
