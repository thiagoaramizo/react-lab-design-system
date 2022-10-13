import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean
    classNames?: string 
}

export function Button( { children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot :  'button'

    return (
        <Comp className={clsx(
            'py-4 px-3 bg-violet-500 rounded font-semibold text-gray-800 text-sm w-full transition-colors hover:bg-violet-700',
            className
        )}
            {...props}
        >
            {children}
        </Comp>
    )
}