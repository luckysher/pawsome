"use client";
import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
    const handleSignUp = () => {
        window.history.replaceState(null, '', '/auth/sign-up/success');
        return;
    }

    return (
        <div className='flex justify-between px-5 sm:px-5 md:px-15 lg:px-25 xl:px-35 2xl:px-35 py-15 items-center'>            
            <div className='hidden md:flex lg:flex xl:flex 2xl:flex flex-col w-5/12 py-2'> 
                <div className='py-1'>
                    <p className='text-lg font-semibold text-gray-500 font-lato '>Have a Pet ?</p>
                    <div className='flex flex-row gap-1'>
                        <h4 className='font-karma font-bold text-3xl text-amber-700 capitalize'>Got your back </h4>
                        <Image
                            src="/paw.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                    </div>
                    
                </div>           
                <div className='relative mt-10'> 
                    <Image
                        src="/image4.png"
                        alt="Logo"
                        width={400}
                        height={0}

                    />  
                </div>
            </div>
            <div className='flex flex-col w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12'> 
                <div className='flex flex-col'> 
                    <h4 className='font-karma font-bold text-3xl text-gray-700 mt-12'>Sign Up </h4>
                    <small className='font-karla font-normal text-gray-500 text-base'>Please sign up to access your account</small>
                    <div className='py-1'>
                        <div className='flex items-center gap-2 relative font-lato font-semibold text-lg text-gray-500 py-6'> 
                            <Image
                                src="/user_icon.png"
                                alt="user_icon"
                                width={40}
                                height={40}
                            />
                            User Details  
                        </div>
                        <form>                        
                            <div className="bg-white rounded-lg">
                                <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                    <input type="text" id="full_name" name="full_name" className="peer bg-transparent h-10 rounded-lg  ring-1 ring-gray-500 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2 w-full" placeholder="e.g Adam James"/>
                                    <label htmlFor="full_name" className="absolute cursor-text left-0 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Full Name*</label>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg">
                                <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                    <input type="text" id="phone_no" name="phone_no" className="peer bg-transparent h-10 w-full rounded-lg  ring-1 ring-gray-500 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2" placeholder="9821420110"/>
                                    <label htmlFor="phone_no" className="absolute cursor-text left-0 -top-3 text-sm font-karla  font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Phone no.*</label>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg">
                                <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                    <input type="text" id="email" name="email" className="peer bg-transparent h-10 w-full rounded-lg  ring-1 ring-gray-500 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2" placeholder="Enter Email"/>
                                    <label htmlFor="email" className="absolute cursor-text left-0 -top-3 text-sm font-karla font-medium text-gray-700  peer-focus-within:text-amber-800 not-only:bg-inherit mx-1 px-1 transition-all">Email*</label>
                                </div>
                            </div>                        

                            <div className="bg-white rounded-lg">
                                <div className="bg-inherit flex items-center text-xs mb-6 md:mb-8 relative">                                
                                    <select id="gender" className="block w-full px-3 py-2.5 border border-gray-500 text-sm text-gray-500 rounded-lg shadow-xs placeholder:text-body appearance-none outline-none">
                                        <option defaultValue="">Tap to Select Gender</option>
                                        <option className="hover:bg-amber-700" value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    <svg className="absolute right-3" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                    <label htmlFor="gender" className="absolute cursor-text left-0 -top-3 text-sm font-karla font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Gender*</label>
                                </div>
                            </div>
                            <Button className='w-full text-sm font-lato font-medium bg-amber-800 hover:shadow-xl hover:bg-amber-900 hover:cursor-pointer p-3 rounded-lg text-white tracking-wider' onClick={handleSignUp}>Continue</Button>
                        </form>                           
                    </div>
                </div>                   
            </div>
        </div>
    );
}