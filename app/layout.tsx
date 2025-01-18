import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import { cg, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Zee Store",
  description: "Built by Zuhayr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cg.className} ${montserrat.className}`}>
      <body className="min-h-[100vh] overflow-x-hidden">
        <WixClientContextProvider>
          <Header />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
