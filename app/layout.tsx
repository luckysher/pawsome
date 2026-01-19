//import type { Metadata } from "next";
import { Inter, Karla, Lato, Karma } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const interFont = Inter({
  variable: "--font-inter", // Define a custom CSS variable for the font
  weight: ['400', '600', '700'],
  subsets: ["latin"], // Specify the subset
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
      <html lang="en">
        <body className={`${interFont.variable} flex`}>
          <main className="">
            <Header />
            {children}
            <Footer />
          </main>          
        </body>
      </html>
    );
}
