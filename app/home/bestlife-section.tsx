"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";


export default function BestLifeSection() {
    const benifits = ['Upto 20% OFF', 'Free Express delivery', 'Exclusive deals'];

    return (
        <div className='flex flex-row  bg-gradient-to-l from-orange-500 to-white'>            
            <div className='flex flex-col flex-1 py-7 px-5'>
                <div className='flex flex-col'>
                    <h1 className='font-inter font-semibold text-3xl'>Give your pet the best life</h1>
                    <div className='font-inter font-medium text-lg underline text-amber-800 mt-2.5'><Link href="#" className="">Upgrade to Premium</Link></div>
                </div>
                <div className='flex flex-col gap-5 mt-6'>
                    {
                        benifits.map((benifit, i) => (
                            <div className={`flex flex-row items-center gap-3 ${i > 0? 'mt-1': ''}`} key={i}>
                                <div className='flex items-center justify-center h-7 w-7 rounded-2xl bg-orange-300'>
                                    <Icon icon="radix-icons:check" className="text-2xl text-semibold text-amber-800" />
                                </div>
                                <div className='font-inter font-normal text-base text-gray-600'>{benifit}</div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='flex flex-row'>
                    <Link href="#" className='flex items-center justify-center text-[15px] w-90 font-inter font-semibold border hover:border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer p-3 rounded-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out mt-8'>View Plans <Icon icon="radix-icons:arrow-right" className="ml-1 text-xl text-semibold" /></Link>
                </div>
            </div>                        
            <div className='flex flex-col flex-1 justify-end'>
                <Image                                
                    src={'/lifeImg.png'}
                    alt="image"
                    width={684}
                    height={0}
                />
            </div>
        </div>
    );
}