import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
        
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <a href='#'>Loren ipsum.</a>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}
