"use client";
import React, {useState, useRef, MouseEvent, ChangeEvent, Fragment} from 'react';
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Steps } from "@/components/steps";


export default function BasicInfoPage() {
    
    const [files, setFile] = useState<File[] | undefined[]>([,,,]);

    const file1Ref = useRef<HTMLInputElement>(null);
    const file2Ref = useRef<HTMLInputElement>(null);
    const file3Ref = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        if(e.target && e.target.files && e.target.files.length > 0){
            
            let petFiles = [...files];
            petFiles.splice(i, 1, e.target.files[0]);
            console.log(petFiles, i);
            setFile(petFiles);
        }
    }

    const handleFile1Upload = (fileIndex: number) => {
        const fileRefs = [file1Ref, file2Ref, file3Ref];
        const fileRef = fileRefs[fileIndex];
        
        fileRef.current?.click();
        return;
    }
    
    const handleAddBasicInfo = () => {
        window.history.replaceState(null, '', '/pet/add/medical-info');
         return;
    }


    const petTypes = [{'type': 'dog', 'icon': 'dog.svg'}, {'type': 'cat', 'icon': 'cat.svg'}];

    return (
        <div className=' px-5 pt-30'>
            <div className='flex flex-row items-center w-full'> 
                <div className='flex text-2xl font-semibold text-gray-700 font-lato gap-2 w-1/2'>
                    <Icon className='font-bold h-6 w-6 text-gray-700' icon="mdi-light:arrow-left" /> 
                    Add new Pet
                </div>
                <Steps stepNo={1} />
                
            </div>
            <form>
                <div className='flex flex-row mt-10'>
                    <div className='flex flex-col'>
                        <input type="hidden" name="petType" id="petType" value="dog" />
                        <label htmlFor="petType" className='font-karla font-medium text-sm'>Pet Type*</label>
                        <div className='flex flex-row gap-4 mt-3'>
                            {
                                petTypes.map((petType, i) => (
                                    <div key={i} className={`flex flex-row items-center justify-center rounded-lg px-3.5 py-2.5 gap-3 ${petType.type === "cat"? "bg-orange-100 border border-amber-700": "bg-grey-100 border border-gray-400"}`}>
                                        <Image
                                            src={`/${petType.icon}`}
                                            alt="icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={`capitalize ${petType.type === 'cat'? 'text-amber-700': 'text-gray-400'}`}>{petType['type']}</div>
                                        
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-15 mt-5'>
                    <div className='flex flex-col flex-1'>
                        <div className="bg-white rounded-lg">
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                <input type="text" id="name" name="name" className="peer bg-transparent h-11 rounded-lg  ring-1 ring-gray-400 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2 w-full" placeholder="e.g Tommy"/>
                                <label htmlFor="name" className="absolute cursor-text left-0 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Name*</label>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                <textarea id="bio" name="bio" rows={5} className="peer bg-transparent h-22 rounded-lg  ring-1 ring-gray-400 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2 py-3 w-full h-15" placeholder="Type here"/>
                                <label htmlFor="bio" className="absolute cursor-text left-0 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Bio/Description</label>
                            </div>
                        </div>                        
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-4'>
                                <Image
                                    className='bg-orange-100'
                                    src={"/paw.png"}
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                />
                                <div className='font-lato font-semibold text-lg text-gray-500'>
                                    Pet Images
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row gap-4'>
                            {
                                [file1Ref, file2Ref, file3Ref].map((fileRef, i) => (
                                        <Fragment key={i}>
                                            <input ref={fileRef} type="file" accept="image/*" id={`image${i+1}`} name={`image${i+1}`} onChange={(e) => handleFileChange(e, i)} style={{display: 'none'}} />
                                            <div className='flex items-center justify-center w-15 h-15 border border-gray-100 mt-4 rounded' onClick={() => handleFile1Upload(i)}>
                                                <Image
                                                    className='bg-orange-100'
                                                    src={files[i]? URL.createObjectURL(files[i]):  "/upload_icon.png"}
                                                    alt={`pet_image${i+1}`}
                                                    width={files[i]? 60: 24}
                                                    height={0}
                                                />
                                            </div>
                                        </Fragment>
                                ))                                    
                            }
                        </div>                        
                    </div>                
                    <div className='flex flex-col flex-1'>                        
                        <div className="bg-white rounded-lg">
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-2 pointer-events-none">
                                    <svg className="bg-orange-100" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_5212_19804)"><path d="M4.5384 0C4.68692 0 4.82936 0.0589998 4.93438 0.16402C5.0394 0.269041 5.0984 0.411479 5.0984 0.56V1.6072H11.112V0.5672C11.112 0.418679 11.171 0.276241 11.276 0.17122C11.381 0.0661998 11.5235 0.0072 11.672 0.0072C11.8205 0.0072 11.963 0.0661998 12.068 0.17122C12.173 0.276241 12.232 0.418679 12.232 0.5672V1.6072H14.4C14.8242 1.6072 15.2311 1.77566 15.5311 2.07555C15.8311 2.37543 15.9998 2.78219 16 3.2064V14.4008C15.9998 14.825 15.8311 15.2318 15.5311 15.5317C15.2311 15.8315 14.8242 16 14.4 16H1.6C1.17579 16 0.768947 15.8315 0.468912 15.5317C0.168877 15.2318 0.000212104 14.825 0 14.4008L0 3.2064C0.000212104 2.78219 0.168877 2.37543 0.468912 2.07555C0.768947 1.77566 1.17579 1.6072 1.6 1.6072H3.9784V0.5592C3.97861 0.410817 4.03771 0.268585 4.1427 0.163737C4.2477 0.0588899 4.39002 -1.51411e-07 4.5384 0ZM1.12 6.1936V14.4008C1.12 14.4638 1.13242 14.5263 1.15654 14.5845C1.18066 14.6427 1.21602 14.6956 1.26059 14.7402C1.30516 14.7848 1.35808 14.8201 1.41631 14.8443C1.47455 14.8684 1.53697 14.8808 1.6 14.8808H14.4C14.463 14.8808 14.5255 14.8684 14.5837 14.8443C14.6419 14.8201 14.6948 14.7848 14.7394 14.7402C14.784 14.6956 14.8193 14.6427 14.8435 14.5845C14.8676 14.5263 14.88 14.4638 14.88 14.4008V6.2048L1.12 6.1936ZM5.3336 11.6952V13.028H4V11.6952H5.3336ZM8.6664 11.6952V13.028H7.3336V11.6952H8.6664ZM12 11.6952V13.028H10.6664V11.6952H12ZM5.3336 8.5136V9.8464H4V8.5136H5.3336ZM8.6664 8.5136V9.8464H7.3336V8.5136H8.6664ZM12 8.5136V9.8464H10.6664V8.5136H12ZM3.9784 2.7264H1.6C1.53697 2.7264 1.47455 2.73882 1.41631 2.76294C1.35808 2.78706 1.30516 2.82242 1.26059 2.86699C1.21602 2.91156 1.18066 2.96448 1.15654 3.02271C1.13242 3.08095 1.12 3.14337 1.12 3.2064V5.0744L14.88 5.0856V3.2064C14.88 3.14337 14.8676 3.08095 14.8435 3.02271C14.8193 2.96448 14.784 2.91156 14.7394 2.86699C14.6948 2.82242 14.6419 2.78706 14.5837 2.76294C14.5255 2.73882 14.463 2.7264 14.4 2.7264H12.232V3.4696C12.232 3.61812 12.173 3.76056 12.068 3.86558C11.963 3.9706 11.8205 4.0296 11.672 4.0296C11.5235 4.0296 11.381 3.9706 11.276 3.86558C11.171 3.76056 11.112 3.61812 11.112 3.4696V2.7264H5.0984V3.4624C5.0984 3.61092 5.0394 3.75336 4.93438 3.85838C4.82936 3.9634 4.68692 4.0224 4.5384 4.0224C4.38988 4.0224 4.24744 3.9634 4.14242 3.85838C4.0374 3.75336 3.9784 3.61092 3.9784 3.4624V2.7264Z" fill="#FF8C59"/></g><defs><clipPath id="clip0_5212_19804"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                    </div>
                                    <input  type="date" id="dob" name="dob" className="peer bg-transparent h-11 rounded-lg ring-1 ring-gray-400 text-gray-400 uppercase focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2 w-full" placeholder="e.g DD/MM/YYYY"/>

                                </div>                                
                                <label htmlFor="dob" className="absolute cursor-text left-0 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Date of Birth*</label>
                            </div>
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                <input type="text" id="color" name="color" className="peer bg-transparent h-11 rounded-lg  ring-1 ring-gray-400 focus:ring-amber-700 focus:outline-none focus:border-rose-600 px-2 w-full" placeholder="Type here"/>
                                <label htmlFor="color" className="absolute cursor-text left-0 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Color</label>
                            </div>
                            <div className="relative bg-inherit flex items-center text-xs mb-6 md:mb-8 ">                                
                                
                                <label htmlFor="gender" className="absolute cursor-text -left-2 -top-3 text-sm font-karla  not-first-of-type:font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Gender*</label>
                                <div className='flex gap-6 mt-3'>
                                    {
                                        ['Male', 'Female'].map((gender:string,i:number) => (
                                            <label key={i} className="flex items-center gap-1 text-sm font-karla font-medium text-gray-700 transition-all"><input type="radio" id={`gender-${i}`} name={`gender-${i}`} className="h-11 px-2 accent-amber-700" checked={"Male" === gender} value={gender} />{gender}</label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className='flex flex-col flex-1'>                        
                        <div className="bg-white rounded-lg">
                            <div className="bg-inherit flex items-center text-xs mb-6 md:mb-8 relative">                                
                                <select id="pet_source" className="block w-full px-3 py-2.5 border border-gray-400 text-sm text-gray-400 rounded-lg shadow-xs placeholder:text-body appearance-none outline-none">
                                    <option defaultValue="">Tap to Select</option>
                                    <option className="hover:bg-amber-700" value="M">Source 1</option>
                                    <option value="F">Source 2</option>
                                </select>
                                <svg className="absolute right-3" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <label htmlFor="pet_source" className="absolute cursor-text left-0 -top-3 text-sm font-karla font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Pet Source*</label>
                            </div>
                            <div className="bg-inherit flex items-center text-xs mb-6 md:mb-8 relative">                                
                                <select id="pet_source" className="block w-full px-3 py-2.5 border border-gray-400 text-sm text-gray-400 rounded-lg shadow-xs placeholder:text-body appearance-none outline-none">
                                    <option defaultValue="">Tap to Select</option>
                                    <option className="hover:bg-amber-700" value="M">German</option>
                                    <option value="F">Bulldog</option>
                                    <option value="F">Labrador</option>
                                </select>
                                <svg className="absolute right-3" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <label htmlFor="pet_source" className="absolute cursor-text left-0 -top-3 text-sm font-karla font-medium text-gray-700 peer-focus-within:text-amber-800 bg-inherit mx-1 px-1 transition-all">Breed*</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-end gap-4 py-5'>
                        <Button className='w-41 text-lg font-lato font-bold border border-amber-800 hover:shadow-xl hover:bg-amber-800 hover:cursor-pointer p-3 rounded-lg text-amber-800 hover:text-white tracking-wider transition duration-200 ease-in-out'>Cancel</Button>
                        <Button className='w-41 text-lg font-lato font-bold border hover:border-amber-800 bg-amber-800 hover:shadow-xl hover:bg-white hover:cursor-pointer p-3 rounded-lg text-white hover:text-amber-800 tracking-wider transition duration-200 ease-in-out' onClick={handleAddBasicInfo}>Next</Button>
                </div>
            </form>
        </div>
    );
}