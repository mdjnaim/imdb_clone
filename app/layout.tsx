import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Provider from "./provider";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchbox";

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "A clone of the popular movie database website, IMDB, built with Next.js.",
};

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Provider>
        <Header />
        <Navbar />
        <SearchBox />
        {children}
        </Provider>
      </body>
    </html>
  );
}
