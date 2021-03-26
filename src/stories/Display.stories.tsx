import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexibleBoxTemplate } from './FlexibleBoxTemplate'

const displayStyle = { style: { border: '1px solid OrangeRed', padding: 20 } }

export default {
  title: 'Container/FlexibleBox/Display',
  component: Flex,
} as Meta

export const DisplayFlex = FlexibleBoxTemplate.bind({})

DisplayFlex.args = {
  flex: true,
  ...displayStyle,
}

export const InlineFlex = FlexibleBoxTemplate.bind({})

InlineFlex.args = {
  inlineFlex: true,
  ...displayStyle,
}
