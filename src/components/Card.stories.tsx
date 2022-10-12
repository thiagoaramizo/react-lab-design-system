import { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from './Card'
import { Heading } from './Heading'
import { Text } from './Text'

export default {
    title: 'Components/Card',
    component: Card,
    args: {
        children: [
            <Heading>Card title</Heading>,
            <Text>Card content</Text>
        ]
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
}
