import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{

} 

const Button = React.forwardRef<HTMLButtonElement, 
                                Props>(({className, ...props}, ref) => {
                                                    return (
                                                            <button
                                                                 ref={ref}
                                                                 className={className}
                                                                 {...props}
                                                                />
                                                            
                                                        )
                                }
                        )


Button.displayName = "Button"
export { Button };