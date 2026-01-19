"use client";
import React from 'react';
import Image from "next/image";


export default function ServicesSection() {
    const services = [{'service': 'Community', 'image':'/serviceImg1.png'}, {'service': 'Playmate', 'image':'/serviceImg2.png'}, {'service': 'Pet shop', 'image':'/serviceImg3.png'}, {'service': 'Veternary', 'image':'/serviceImg4.png'}, , {'service': 'Veternary', 'image':'/serviceImg5.png'}];

    return (
        <div className='flex flex-col  px-5 pt-10 pb-10 items-center'>
                <div className='flex flex-row justify-center'>
                    <div className='flex gap-4 bg-orange-300 text-amber-800 text-sm font-inter font-medium rounded-2xl px-3 py-1'>
                        More service comming soon
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-2/3 mt-1'>
                    <h1 className='font-inter font-bold text-[32px] mt-3'>Our Services</h1>
                    <div className='font-inter font-normal text-base text-gray-50 text-center mt-4'>
                        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                    </div>
                </div>
                <div className='flex flex-col mt-15'>
                    <div className='flex flex-row gap-5'>
                        {
                            services.map((service, i) => (
                                <div key={i} className='flex flex-col bg-neutral-100 justify-center items-center px-10 py-6 rounded-lg'>
                                    <Image                                
                                        src={service.image}
                                        alt="image"
                                        width={120}
                                        height={0}
                                    />
                                    <div className='font-inter font-semibold text-base mt-2'>{service.service}</div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>                        
        </div>
    );
}