"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-center px-2 sm:px-10 md:px-2 lg:px-10 xl:px-10 2xl:px-10'>
                <div className='flex flex-col items-center mt-28 py-1'>
                    <Image
                        src="/tick_icon.png"
                        alt="icon"
                        width={135}
                        height={135}
                    />
                    <h4 className='font-lato font-bold text-3xl capitalize py-3 mt-7'>Registration Successful </h4>
                </div>
                <div className='font-lato font-medium text-base text-gray-500'>Your account has been created Successfully </div>
                <Link href="/pet/add/basic-info" className='w-full text-center text-sm font-lato font-medium bg-amber-800 hover:shadow-xl hover:bg-amber-900 hover:cursor-pointer p-3 rounded-lg text-white tracking-wider my-2 mt-14'>+ Add your Pet</Link>
                <Link href="#" className='font-karla font-medium text-base'>Explore without adding pet</Link>
                <div className='flex font-karla font-normal text-sm text-gray-700 bg-orange-100 p-3 rounded-xl mt-16'><span className="text-red-800">Note: &nbsp;</span> Please add your pet to access complete list of features of Pawsome</div>
            </div>
        </div>
    );
}