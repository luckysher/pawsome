"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function VerifyOtpPage() {
    
    const [otp, setOTP] = useState(['','','','']);

    const handleLogin = () => {
           window.history.replaceState(null, '', '/auth/login/verify-otp');
            return;
    }

    const focusNextInput = (elemNum: number, val: string) => {
        const inputs = document.querySelectorAll('input');
        

        if (elemNum < 3 && val !== "") {
            inputs[elemNum+1].focus();
        }

        if (elemNum > 0 && val === "") {
            inputs[elemNum-1].focus();
        }
        
    }
    
    const handleOTPInput = (e: React.ChangeEvent<HTMLInputElement>, elId:number) => {        
        let updatedValues = [...otp];
        updatedValues.splice(elId, 1, e.target.value);
        setOTP(updatedValues);
        focusNextInput(elId, e.target.value);
        
    }
    

    return (
        <div className='flex justify-between px-35 py-18 items-center'>
            <div className='flex flex-col w-5/12 py-2'> 
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
                        src="/image3.png"
                        alt="Logo"
                        width={400}
                        height={0}

                    />  
                </div>
            </div>
            <div className='flex flex-col w-5/12 items-center'> 
                <h4 className='font-karma font-bold text-3xl text-gray-700 mt-12'>OTP Verification </h4>
                <small className='font-karla font-normal text-gray-500 text-base'>Enter The code we Sent to <span className='font-medium text-gray-700'>+91 8822334455</span></small>
                <div className='py-10 w-full px-5'>
                     <form className=''>                                                
                        <div className="flex items-center justify-center gap-2.5 mb-8">
                            <input
                                type="text" className="w-12.5 h-12.5 text-center text-2xl font-extrabold text-slate-900 border border-gray-400 hover:border-slate-200 appearance-none rounded-lg p-4 outline-none focus:bg-white focus:border-amber-700 focus:border-amber-700"
                                pattern="\d*" maxLength={1}
                                placeholder='_'
                                onChange={(e) => handleOTPInput(e, 0)} />
                            <input
                                type="text" className="w-12.5 h-12.5 text-center text-2xl font-extrabold text-slate-900 border border-gray-400 hover:border-slate-200 appearance-none rounded-lg p-4 outline-none focus:bg-white focus:border-amber-700 focus:border-amber-700"
                                maxLength={1} 
                                placeholder='_'
                                onChange={(e) => handleOTPInput(e, 1)} />
                            <input
                                type="text" className="w-12.5 h-12.5 text-center text-2xl font-extrabold text-slate-900 border border-gray-400 hover:border-slate-200 appearance-none rounded-lg p-4 outline-none focus:bg-white focus:border-amber-700 focus:border-amber-700"
                                maxLength={1} 
                                placeholder='_'
                                onChange={(e) => handleOTPInput(e, 2)} />
                            <input
                                type="text" className="w-12.5 h-12.5 text-center text-2xl font-extrabold text-slate-900 border border-gray-400 hover:border-slate-200 appearance-none rounded-lg p-4 outline-none focus:bg-white focus:border-amber-700 focus:border-amber-700"
                                maxLength={1} 
                                placeholder='_'
                                onChange={(e) => handleOTPInput(e, 3)} />
                        </div>

                        <Button className='w-full text-sm font-lato font-medium bg-amber-800 hover:shadow-xl hover:bg-amber-900 hover:cursor-pointer p-3 rounded-lg text-white tracking-wider my-5' onClick={handleLogin}>Verify now</Button>
                      </form>   
                      <p className='font-karla font-normal text-gray-500 text-base text-center'>Didn't receive the OTP ? <Link href={"#"} className="text-amber-800">Resend</Link></p>

                    
                </div>
                
            </div>
        </div>
    );
}