"use client";

interface StepsProp {
    stepNo: number,
    className?: string,
}


export function Steps(props: StepsProp) {
    const { stepNo, className } = props;
    const steps = ["basic info", "medical info", "documents"];
    
    return (
        <div className={`flex flex-row justify-start sm:justify-start md:justify-end lg:justify-end xl:justify-end 2xl:justify-end w-full lg:w-1/2 xl:w-5/12 2xl:w-1/2 mt-6 sm:mt-6 md:mt-auto lg:mt-auto xl:mt-auto 2xl:mt-auto px-5 sm:px-5 md:px-10 lg:px-16 xl:px-16 2xl:px-16 ${className}`}> 
            {
                steps.map((step, i) => (
                    <div className={`flex flex-col ${i+1 < steps.length? 'w-full': ''}`} key={i}>
                        <div className='flex items-center'>
                            {
                                (i < stepNo)?
                                    (
                                        <div className='flex items-center justify-center h-4 w-4 bg-orange-100 rounded-xl border-amber-800'>
                                            <div className='h-2 w-2 bg-amber-800 rounded'></div>
                                        </div>                                                                                                                    
                                    )
                                :
                                    (
                                        <div className='flex items-center justify-center h-4 w-4 bg-gray-100 rounded-xl border-gray-800'>
                                            <div className='h-2 w-2 bg-gray-400 rounded'></div>
                                        </div>                        
                                    )

                            }
                            {
                                (i < stepNo-1)?
                                    (i < 2)? (<hr className='text-amber-800 w-full 2xl:w-auto border transition duration-500 ease-in-out'></hr>): ("")
                                :
                                    (i < 2)? (<hr className='text-gray-100 w-full border transition duration-500 ease-in-out'></hr>): ("")
                            }    
                        </div>
                        <div className={(i < stepNo)? 'text-amber-700 font-medium font-lato text-xs capitalize -ml-4': 'text-gray-300 font-medium font-lato text-xs capitalize -ml-4'}>{step}</div>
                    </div>
                ))
            }
            
        </div>                
    );
}
