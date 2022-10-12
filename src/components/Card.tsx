import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode
    asChild?: boolean 
}

export function Card( { children, asChild }: CardProps) {
    const Comp = asChild ? Slot :  'div'

    return (
        <Comp className='py-8 px-9 rounded-md bg-gray-100 border border-gray-200 w-full'>
            {children}
        </Comp>
    )
}