import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./template/Nav";
import Footer from "./template/Footer";

// Import Montserrat font
const montserrat = Montserrat({
  weight: ["100", "400", "700"],
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
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <Footer />
        {children}
      </body>
    </html>
  );
}