"use client";

import Link from "next/link";
import Image from "next/image";

export function CopyRight() {
    
    const socialIcons = ['/facebook.png', '/google.png', '/apple.png', '/insta.png'];

    return (
                <div className="flex flex-col justify-between py-6">
                    <hr className="w-full text-gray-300"/>
                    <div className="flex flex-row justify-between px-4 py-6">                                            
                        <div className="font-inter font-normal text-base text-gray-50">&#169; 2026 Pawsome. All rights reserved.</div>
                        <div className="flex flex-row gap-6">
                        {
                            socialIcons.map((icon, i) => (
                                <Link key={i} href="#" className="flex items-center space-x-2">
                                    <Image
                                        src={icon}
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        priority
                                    />                            
                                </Link>                                                   
                            ))
                        }
                        </div>
                    </div>                    
                </div>
    );
}
