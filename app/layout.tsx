import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import { Footer, Header } from "@/shared/components";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blender Swap",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={quicksand?.className}>
        <div className="flex flex-col items-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
