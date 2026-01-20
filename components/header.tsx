"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const siteConfig = {
        name: "Pawsome",
    };
    

    const items = [
        { href: "/", title: "Home", subMenu: [] },
        { href: "/shop", title: "Shop", subMenu: [{ href: "/shop", title: "Shop"}, { href: "/vetenery", title: "Vetenery"}] },
        { href: "/vetenery", title: "Vetenery", subMenu: [{ href: "/vetenery-1", title: "Vetenery-1"}, { href: "/vetenery-2", title: "Vetenery-2"}] },
        { href: "/community", title: "Community", subMenu: [] }
    ];
    

    return (
        <>
            <div className="h-0 sticky -top-2 z-50">

                {/* Header for larger screens */}
                <header className="hidden lg:flex bg-white/70 hover:bg-white/90 transition duration-200 ease-in-out sticky my-0 z-40 border-b-gray-600 shadow-sm">
                    <div className="w-full flex h-16 items-center justify-between space-x-8 px-5 mr-1">
                        <div className="flex items-center justify-between space-x-8 pb-2">
                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={52}
                                    height={52}
                                    priority
                                />                            
                            </Link>

                            {/* Navigation */}
                            <nav className="hidden items-center gap-6 lg:flex">
                                {items.map((item, index) => (
                                    <div key={index} className="flex gap-2">                                        
                                        {
                                            (item.subMenu.length > 0) ? (
                                                <div className="group relative z-50">
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        className={"flex items-center transition duration-200 ease-linear text-base font-semibold text-gray-600 group-hover:text-gray-800"}
                                                    >
                                                        {item.title}
                                                        <Icon icon="radix-icons:caret-down" className="text-2xl text-semibold text-gray-500 transition duration-200 ease-out group-hover:-rotate-180 group-hover:text-amber-800" />
                                                    </Link>       

                                                    <div className="absolute left-0 top-full pt-9 pointer-events-none -translate-y-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 ">
                                                        <div className="flex w-45 rounded shadow-xs bg-white">
                                                            <div className="flex flex-1 flex-col gap-2 p-2">
                                                                {
                                                                    item.subMenu.map((subItem, i) => (
                                                                        <Link key={i} className="flex items-center gap-3.5 rounded px-3 py-2.5 transition ease-linear hover:bg-orange-100" href={subItem.href}>                                                    
                                                                            <div className="text-sm text-gray-900">{subItem.title}</div>
                                                                        </Link> 
                                                                    ))
                                                                }
                                                                                                                                                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                            ):(
                                                <div className="flex">
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        className={"text-base font-semibold text-gray-600"}
                                                    >
                                                        {item.title}
                                                    </Link>                                                                                                        
                                                </div>)

                                        }
                                    </div>
                                ))}
                            </nav>                            
                        </div>
                        {/* Buttons */}
                        <div className="flex h-16 items-center gap-1 pb-3">
                            {/* Login button */}
                            <Link
                                href={"/auth/login"}
                                className='text-base font-semibold border border-white hover:shadow-xl hover:border-amber-800 hover:cursor-pointer p-3 rounded-xl text-gray-600 hover:text-amber-800 tracking-wider transition duration-200 ease-in-out px-5 py-2.5' title={"Log in"}
                            >
                                Log in
                            </Link>
                            

                            {/* Sign up button */}
                            <Link
                                href={"/auth/sign-up"}
                                className={"text-base font-semibold  border border-amber-800 bg-amber-800 text-white hover:shadow-lg hover:bg-white hover:text-amber-800 btn-link active  transition duration-200 ease-in-out rounded-xl px-5 py-2.5"}
                            >
                                Sign up                                
                            </Link>
                            
                        </div>
                    </div>
                </header>

                {/* Header for smaller screens */}
                <header
                    className={`flex lg:hidden bg-white sticky top-0 z-50 px-4 py-3 shadow-md relative transition-all duration-500 ${isMenuOpen ? 'rounded-t-xl' : 'rounded-xl'
                        }`}
                >
                    {/* Logo */}
                    <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">

                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            priority
                        />
                    <span className="inline-block font-black text-lg">{siteConfig.name}</span></Link>

                    </div>

                    {/* Menu */}
                    <div
                        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl z-40 transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-[500px]" : "max-h-0"
                            }`}
                    >
                        <nav className="flex flex-col space-y-2 p-4">
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                       
                    </div>
                </header>

            </div>
        </>
    );
}
