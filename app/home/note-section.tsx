"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/tag";

export default function NoteSection() {
    
    return (
        <div className='flex flex-col py-10'>
            <div className='flex flex-col px-5 py-3 bg-orange-100'>
                <div className='flex flex-row items-center justify-between p-1'>
                    <div className='flex flex-row items-center gap-2.5'>
                        <Image                                
                            src={'/ceo.png'}
                            alt="image"
                            width={32}
                            height={32}
                        />
                        <div className='font-lato font-semibold text-lg text-orange-900'>Note From CEO</div>
                    </div>
                    <Image              
                        className='-mr-2'                  
                        src={'/paw.png'}
                        alt="image"
                        width={24}
                        height={24}
                    />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-start'><div className='font-karla italic font-normal text-[40px] text-amber-800'>&ldquo;</div></div>
                    <div className='font-karla font-medium text-base italic text-gray-700 -mt-5 -mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima.</div>            
                    <div className='flex flex-row justify-end'><div className='font-karla italic font-normal text-[40px] text-amber-800'>&rdquo;</div></div>
                </div>
            </div>
        </div>
    );
}