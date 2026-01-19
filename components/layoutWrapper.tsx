"use client";

import "@/app/globals.css";
import { usePathname } from 'next/navigation';

import { Header } from "./header";
import { Footer } from "./footer";



export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    const pathname = usePathname();
    const noFooterPaths = ['/auth/login', '/auth/login/verify-otp', '/auth/sign-up', '/auth/sign-up/success']; 
    const showFooter = !noFooterPaths.includes(pathname)

    return (
            <main className="">
              <Header />              
              {children}
              {showFooter && <Footer />}
            </main>          
    );
}
