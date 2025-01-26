import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WixClientContextProvider } from "@/context/wixContextClient";
import { cg, montserrat } from "./fonts";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster";
import { Modal } from "@/components/ui/animated-modal";

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
      <body className="min-h-[100vh]">
        <WixClientContextProvider>
          <Modal>
            <Suspense fallback={<Loading />}>
              <Header />
              {children}
              <Footer />
            </Suspense>
          </Modal>
        </WixClientContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
