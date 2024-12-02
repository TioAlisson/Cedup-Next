import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./template/Footer";
import Header from "./template/Header";

const openSans = Montserrat({
  weight: ["100", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased `}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
