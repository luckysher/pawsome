"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Service {
    service: string,
    image: string,
}

export default function ServicesSection() {
    const [services, setServices] =  useState<Array<Service>>([{'service': 'Community', 'image':'/serviceImg1.png'},
                                                               {'service': 'Playmate', 'image':'/serviceImg2.png'},
                                                               {'service': 'Pet shop', 'image':'/serviceImg3.png'},
                                                               {'service': 'Veternary', 'image':'/serviceImg4.png'},
                                                               {'service': 'Veternary', 'image':'/serviceImg1.png'}]);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div className='flex flex-col  px-5 pt-10 pb-10 items-center'>
                <div className='flex flex-row justify-center'>
                    <div className='flex gap-4 bg-orange-300 text-amber-800 text-sm font-inter font-medium rounded-2xl px-3 py-1'>
                        More service comming soon
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mt-1'>
                    <h1 className='font-inter font-bold text-[32px] mt-3'>Our Services</h1>
                    <div className='font-inter font-normal text-base text-gray-50 text-center mt-4'>
                        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                    </div>
                </div>
                <div className='flex flex-row mt-15'>
                        <Carousel 
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={'desktop'}
                            dotListClass="custom-dot-list-style"
                        >
                            {
                                services.map((service, i) => (
                                    <div key={i} className='flex flex-col bg-neutral-100 justify-center items-center px-10 py-6 rounded-lg ml-5 max-w-50 max-h-50'>
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
                        </Carousel>;
                </div>                
        </div>
    );
}