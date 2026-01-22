"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copyright";


export function Footer() {
    
    return (
        <>
            <div className="mt-15">                
                <footer className="flex flex-col border-t border-t-gray-400 pt-16 pr-10 overflow-x-hidden">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between">
                        <div className="flex flex-col w-1/4 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 px-4">                    
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
                            <div className="font-inter font-normal text-base text-gray-50 mt-4">Generate outside the box thinking with the possibility to target the low</div>         
                        </div>
                        <div className="flex flex-col w-1/4 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 px-4 mt-4 sm:mt-4 md:mt-auto lg:mt-auto xl:mt-auto 2xl:mt-auto">
                            <h5 className="mb-4 font-inter font-semibold text-base">Resources</h5>
                            {
                                ['community', 'events', 'help center', 'partners'].map((resource, i) => (
                                    <div key={i} className="font-inter font-medium text-gray-50 mb-3 capitalize">{resource}</div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col w-1/4 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 px-4">
                            <h5 className="mb-4 font-inter font-semibold text-base">Products</h5>
                                {
                                    ['integrations', 'solutions', 'features', 'enterprise'].map((resource, i) => (
                                        <div key={i} className="font-inter font-medium text-base capitalize text-gray-50 mb-3">{resource}</div>
                                    ))
                                }
                        </div>
                        <div className="flex flex-col w-1/4 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 px-4">
                            <h5 className="mb-4 font-inter font-semibold text-base">Get Email Notifications</h5>
                            <div className="font-inter font-normal text-base mb-3 text-gray-50">Generate outside the box thinking with the possibility to target the low</div>        
                            <form>
                                <div className="flex flex-row items-center">                                
                                    <input type="email" id="email" name="email" className="text-xs bg-transparent h-10 w-2/3 rounded-l-lg ring-1 ring-gray-500 focus:ring-amber-700 focus:outline-none px-4" placeholder="Enter email..."/>                                                                    
                                    <Button className='text-sm font-inter font-medium border border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer py-2.5 rounded-r-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out px-6 sm:px-6 md:px-2 lg:px-6 xl:px-6 2xl:px-6'>Submit</Button>
                                </div>    
                            </form>
                        </div>
                    </div>
                    <CopyRight />
                </footer>
            </div>
        </>
    );
}
