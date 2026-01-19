"use client";

interface StepsProp {
    stepNo: number;
}


export function Steps(props: StepsProp) {
    const { stepNo } = props;
    const steps = ["basic info", "medical info", "documents"];
    
    return (
        <div className='flex flex-row justify-end w-1/2'> 
            {
                steps.map((step, i) => (
                    <div className='flex flex-col' key={i}>
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
                                    (i < 2)? (<hr className='text-amber-800 w-45 border transition duration-500 ease-in-out'></hr>): ("")
                                :
                                    (i < 2)? (<hr className='text-gray-100 w-45 border transition duration-500 ease-in-out'></hr>): ("")
                            }    
                        </div>
                        <div className={(i < stepNo)? 'text-amber-700 font-medium font-lato text-xs capitalize -ml-4': 'text-gray-300 font-medium font-lato text-xs capitalize -ml-4'}>{step}</div>
                    </div>
                ))
            }
            
        </div>                
    );
}
