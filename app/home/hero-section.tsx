"use client";
import React, {useState, useRef, MouseEvent, ChangeEvent, Fragment} from 'react';
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
        
    return (
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row px-5 pt-30 pb-17 bg-linear-to-b from-orange-400 to-white '>
            <div className='flex flex-col flex-1 pr-auto sm:pr-20 md:pr-40 lg:pr-40 xl:pr-40 2xl:pr-40'>
                <div className='flex flex-row'>
                    <div className='flex gap-4 bg-orange-300 text-amber-800 rounded-2xl px-2 py-1'>
                        <div className='rounded-2xl bg-white px-2'>
                            New!
                        </div>
                        
                        Refer a friend & Get 25%
                        <Icon icon="radix-icons:arrow-right" className="text-2xl text-semibold -ml-3" />
                    </div>
                </div>
                <div className='mt-6'>
                    <h1 className='font-inter font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-[44px] 2xl:text-[44px]'>Where Pets feel <span className='text-amber-800'>at Home:</span> <br/> Discover Love and Care</h1>
                </div>
                <div className='mt-6 font-inter font-normal text-xl text-gray-800'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
                </div>
                <div className='flex flex-row'>
                    <Button className='text-[15px] font-inter font-semibold border hover:border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer p-3 rounded-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out mt-9'>Get Started</Button>
                </div>

            </div>
            <div className='flex flex-col'>
                <Image
                    src={'/heroImg.png'}
                    alt="image"
                    width={1000}
                    height={0}
                    style={{width: "100%", maxWidth: '421px', height: "auto"}}
                />
            </div>
        </div>
    );
}