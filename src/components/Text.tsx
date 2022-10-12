import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode
    asChild?: boolean
    color?: 'default' | 'dark';  
}

export function Text( { size = 'md', children, asChild, color = 'default' }: TextProps) {
    const Comp = asChild ? Slot :  'span' 

    return (
        <Comp className={clsx(
            'font-sans',
            {
                'text-gray-800': color === 'default',
                'text-gray-500': color === 'dark',
            },
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            },
        )}>
            {children}
        </Comp>
    )
}