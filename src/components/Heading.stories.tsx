import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading default'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
        
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading H1 tag</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild:  {
            table: {
                disable: true,
            }
        },
    }
}
