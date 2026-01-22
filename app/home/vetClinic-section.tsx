"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";


export default function VetClinicSection() {
    const clinics = [{name: "crown vet", rating: 3, totalRating: 4.1, distance: "4 km away", timing: "08:00 AM - 08:00 PM", consultations: "20+", appointmentFeesNow: 199, appointmentFeesBefore: 210, image: '/clinicImg1.png' },
                     {name: "crown vet", rating: 3, totalRating: 4.1, distance: "4 km away", timing: "08:00 AM - 08:00 PM", consultations: "20+", appointmentFeesNow: 199, appointmentFeesBefore: 210, image: '/clinicImg2.png' },
                     {name: "crown vet", rating: 3, totalRating: 4.1, distance: "4 km away", timing: "08:00 AM - 08:00 PM", consultations: "20+", appointmentFeesNow: 199, appointmentFeesBefore: 210, image: '/clinicImg3.png' }];

    return (
        <div className='flex flex-col py-10 mt-10'>            
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col text-center w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 px-5'>
                    <h1 className='font-inter font-bold text-[32px]'>Nearby Vet Clinic</h1>            
                    <div className='font-inter font-normal text-base text-gray-50 mt-4'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 px-6 mt-15 gap-6 sm:gap-6 ">                
                {
                    clinics.map((clinic, i) => (
                        <div key={i} className='flex flex-col'>
                            <div className='relative'> 
                                <Image
                                    src={clinic.image}
                                    alt="image"
                                    blurDataURL="data:..."
                                    placeholder="blur"
                                    width={1000}
                                    height={0}
                                    style={{width: "100%", height: "auto"}}
                                />
                            </div>
                            <div className='p-2.5 bg-neutral-200 border border-neutral-500 rounded-b-xl'>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='font-lato font-medium text-[15px] capitalize'>{clinic.name}</div>      
                                    <div className='flex flex-row items-center gap-1'>                          
                                        {
                                            [1,2,3,4,5].map((i) => (
                                                <div key={i} className="w-3 h-3">
                                                    { i <= clinic.rating? <Image                                
                                                                                src={'/star-fill.png'}
                                                                                alt="image"
                                                                                width={12}
                                                                                height={12}
                                                                            />
                                                                            :
                                                                            <Image                                
                                                                            src={'/star.png'}
                                                                                alt="image"
                                                                                width={12}
                                                                                height={12}
                                                                            /> }
                                                </div>
                                            ))                                        
                                        }
                                        <div className='font-karla font-medium text-[13px]'>{clinic.totalRating}</div>
                                    </div>
                                </div>
                                <div className='flex flex-row'><div className='font-karla font-normal text-[13px] text-gray-500'>Time: {clinic.timing}</div></div>
                                <div className='flex flex-row justify-between mt-2.5'>                          
                                    <div className='flex flex-row'><Icon icon="mdi:location" className="text-lg text-amber-800" /><div className='font-karla font-medium text-[13px] text-gray-700'>{clinic.distance}</div></div>
                                    <div className='font-karla font-medium text-[13px] text-gray-500'>{clinic.consultations} Consultations</div>
                                </div>
                                <hr className='text-gray-100 my-2'/>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row'>                                        
                                            <div className='flex flex-row items-center gap-1 bg-black rounded-2xl p-1'>                          
                                                <div className='flex items-center justify-center h-4 w-4 bg-yellow-500 rounded-2xl'>
                                                    <Icon icon="mdi:paw" className="text-xs" />
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <div className='font-lato font-bold text-[10px]'>
                                                        <span className='text-yellow-500 uppercase'>gold </span>
                                                        <span className='text-white'>Exclusive</span>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                        <div className='flex flex-row pt-2'>
                                            <div className='flex font-lato gap-1'>                                        
                                                <div className='flex items-center text-amber-800 font-bold text-[22px]'><Icon icon="mdi:currency-inr" className="text-[22px] -mr-1" />{clinic.appointmentFeesNow}</div>
                                                <div className='flex items-center mt-1 font-medium text-[15px] text-gray-500 line-through'><Icon icon="mdi:currency-inr" className="text-[15px]" />{clinic.appointmentFeesBefore}</div>
                                            </div>  
                                            <div className='flex flex-col'>
                                                <div className='bg-green-500 rounded text-white font-normal text-[10px] p-1 mt-0.5 ml-1'>10%OFF</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='text-[13px] font-lato font-semibold border hover:border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer px-3 py-3 rounded-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out mt-4'>Book Appointment</Button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))                    
                }                
            </div>
        </div>
    );
}