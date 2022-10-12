import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';

// Input 
export interface TextInputRootProps {
    children: ReactNode;
}
function TextInputRoot( props: TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-4 rounded bg-gray-200 w-full transition-all focus-within:ring-2 ring-violet-700'>
            {props.children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput(props: TextInputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 text-gray-800 text-xs  placeholder:text-gray-500 outline-0' 
            {...props}
        />
    )
}
TextInputInput.displayName = 'TextInput.Input'

export interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon( props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-500'>
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}