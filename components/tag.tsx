import * as React from 'react';

interface TagProps {
        size: string,
        className?: string,
        selected: boolean,
        handleClick: () => void
}

const Tag = (props: TagProps) => {
                const {size, selected, className, handleClick} = props;
                return (
                        <div className={`flex flex-row items-center gap-1 border border-gray-100 px-1 py-1.5 hover:cursor-pointer rounded ${selected? 'bg-amber-700': ''} ${className} `} onClick={handleClick}>
                                <div className='flex flex-row'>
                                        <div className='font-lato font-medium text-xs'>{size} </div>                                                        
                                </div>                                               
                        </div>
                        
                )
        }


export { Tag };