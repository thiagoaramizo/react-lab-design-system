import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode
    asChild?: boolean 
}

export function Heading( { size = 'md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot :  'h2'

    return (
        <Comp className={clsx(
            'text-gray-800 font-semibold font-sans',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
                'text-4xl': size === 'xl',
            }
        )}>
            {children}
        </Comp>
    )
}