"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const handleLogin = () => {
            window.history.replaceState(null, '', 'login/verify-otp');
            return;
    }

    return (
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between px-10 sm:px-10 lg:px-35 xl:px-35 2xl:px-35 py-18 items-center'>
            <div className='hidden md:flex lg:flex xl:flex 2xl:flex flex-col w-5/12 py-1 mt-5 sm:mt-5 md:mt-5 lg:mt-auto xl:mt-auto 2xl:mt-auto'> 
                <div className='py-1'>
                    <p className='text-lg font-semibold text-gray-500 font-lato '>Have a Pet ?</p>
                    <div className='flex flex-row gap-1'>
                        <h4 className='font-karma font-bold text-3xl text-amber-700 capitalize'>Got your back </h4>
                        <Image
                            src="/paw.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                    
                </div>           
                <div className='relative mt-4'> 
                    <Image
                        src="/image2.png"
                        alt="Logo"
                        width={405}
                        height={0}
                    />  
                </div>
            </div>
            <div className='flex flex-col w-2/3 sm:w-2/3 md:w-5/12 xl:w-5/12 2xl:w-5/12 mt-20 sm:mt-20 md:mt-auto  lg:mt-auto xl:mt-auto 2xl:mt-auto'> 
                <h4 className='font-karma font-bold text-3xl text-gray-700 mt-12'>Log in </h4>
                <small className='font-karla font-normal text-gray-500 text-base'>Please sign in to access your account</small>
                <div className='py-10'>
                     <form>                        
                        <div className="bg-white rounded-lg">
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">
                                <div className='absolute p-3'> 
                                    <Image
                                        src="/phone-outline.png"
                                        alt="phone-icon"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <input type="text" id="phone" name="phone" className="peer bg-transparent h-10 w-72 rounded-lg  ring-1 px-2 ring-amber-700 focus:ring-sky-600 focus:outline-none focus:border-rose-600 px-10 w-full" placeholder="Enter phone no"/>
                                <label htmlFor="phone" className="absolute cursor-text left-0 -top-3 text-sm font-font-medium text-amber-800 bg-inherit mx-1 px-1 transition-all">Phone no.</label>
                            </div>
                        </div>
                         <Button className='w-full text-sm font-lato font-medium bg-amber-800 hover:shadow-xl hover:bg-amber-900 hover:cursor-pointer p-3 rounded-lg text-white tracking-wider' onClick={handleLogin}>Continue</Button>
                      </form>   
                    
                </div>
                
            </div>
        </div>
    );
}