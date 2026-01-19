"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/tag";

interface Product {
    name: string,
    rating: number,
    totalRating: number,
    sizes: Array<string>,
    selected: Array<string>,
    priceNow: number,
    priceBefore: number,
    discount: string,
    image: string 
}

export default function OrdersSection() {
    const [products, setProducts] = useState<Array<Product>>([{name: "Dogsee Chew, Bars, Dog Treats", rating: 3.2, totalRating: 20, sizes: ['100gm', '150gm', '200gm', '500gm'], selected: ['500gm'], priceNow: 300, priceBefore: 450, discount: '25%', image: '/product.png' },
                                    {name: "Dogsee Chew, Bars, Dog Treats", rating: 3.2, totalRating: 20, sizes: ['100gm', '150gm', '200gm', '500gm'], selected: ['200gm'], priceNow: 300, priceBefore: 450, discount: '25%', image: '/product.png' },
                                    {name: "Dogsee Chew, Bars, Dog Treats", rating: 3.2, totalRating: 20, sizes: ['100gm', '150gm', '200gm', '500gm'], selected: ['150gm'], priceNow: 300, priceBefore: 450, discount: '25%', image: '/product.png' },
                                    {name: "Dogsee Chew, Bars, Dog Treats", rating: 3.2, totalRating: 20, sizes: ['100gm', '150gm', '200gm', '500gm'], selected: ['500gm'], priceNow: 300, priceBefore: 450, discount: '25%', image: '/product.png' }]);
    
    const handleClick = (productIdx: number, sizeNum: number) => {                
        products.splice(productIdx, 1, {...products[productIdx], selected: [products[productIdx].sizes[sizeNum]]});
        setProducts([...products]);
    }                

    return (
        <div className='flex flex-col py-10'>            
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col text-center w-2/3'>
                    <h1 className='font-inter font-bold text-[32px]'>Past Orders</h1>            
                    <div className='font-inter font-normal text-base text-gray-50 mt-4'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</div>
                </div>
            </div>

            <div className='flex flex-row gap-4 justify-center mt-15'>
                {
                    products.map((product, i) => (
                        <div key={i} className='flex flex-col border border-neutral-500 rounded-xl'>
                            <div className='flex flex-col p-2'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center'>
                                        <div className='flex flex-col mb-auto'>
                                            <div className='font-lato font-normal text-[10px] bg-blue-500 rounded-tl-lg rounded-br-lg px-1.5 py-1 text-white'>Newly Added</div>    
                                        </div>
                                        <div className='flex flex-col pt-3.5'>
                                            <Image                                
                                                src={product.image}
                                                alt="image"
                                                width={120}
                                                height={0}
                                            />
                                        </div>
                                        <div className='flex flex-col mt-auto'>
                                            <div className='flex flex-row items-center gap-1 border border-gray-100 px-1.5 py-0.5 rounded'>
                                                <div className='flex flex-row border-r border-r-gray-100 pr-1'>
                                                    <div className='font-lato font-normal text-[10px]'>{product.rating} </div>
                                                    <Icon icon="mdi:star" className="h-3 w-3 text-amber-800 ml-0.5" /> 
                                                </div>                                               
                                                <div className='font-lato font-normal text-[10px]'>{product.totalRating}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row py-3'>
                                            <div className='font-lato text-gray-700 font-medium text-[15px]'>{product.name}</div>
                                        </div>
                                        <div className='flex flex-row'>
                                            <hr className='text-gray-200 my-2 w-full'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row py-1'>
                                                <div className='font-lato font-medium text-xs'>Size of Pack:</div>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                {
                                                    product.sizes.map((size, x) => (
                                                         <Tag key={x} size={size} selected={product.selected.indexOf(size) >= 0} handleClick={() => handleClick(i, x)} />
                                                    ))
                                                }
                                            </div>
                                            <div className='flex flex-row'>
                                                <hr className='text-gray-200 my-2 w-full'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center text-amber-800 font-karla font-medium text-lg'><Icon icon="mdi:currency-inr" className="text-lg -ml-1" />{product.priceNow}</div>
                                            <div className='flex flex-row'>
                                                <div className='flex flex-row items-center gap-1'>                                        
                                                    <div className='font-lato font-normal text-[10px] text-gray-500 mt-0.5'>MRP:</div>
                                                    <div className='flex items-center font-lato font-medium text-[10px] text-gray-500 line-through mt-0.5'><Icon icon="mdi:currency-inr" className="text-[10px] -mt-0.5" />{product.priceBefore}</div>                                                
                                                    <div className='bg-green-500 rounded text-white font-normal text-[10px] p-1 py-0.5'>10%OFF</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                                <Button className='text-[13px] font-lato font-semibold border hover:border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer p-3 rounded-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out mt-4' title={"Click to buy this product again"}>Buy again</Button>
                            </div>
                            <div className='flex flex-row gap-1 items-center px-2 py-1.5 bg-linear-to-r from-orange-200 to-white rounded-bl-xl rounded-br-xl'>
                                <Icon icon="mdi:truck-fast-outline" className="text-lg text-yellow-500" />
                                <div className='font-lato font-normal text-[10px]'>Express delivery in <span className='text-amber-800'>120 mins</span></div>
                            </div>
                        </div>
                    ))                    
                }                
            </div>
        </div>
    );
}