import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import ScheduleCard, { ScheduleProps } from "./ScheduleCard"

export default {
  title: "Schedule",
  component: ScheduleCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ScheduleProps> = (args) => <ScheduleCard {...args} />

export const Full = Template.bind({})
Full.args = {
  title: "The main title",
  subtitle: "the subtitle",
  avatar:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diethelmtravel.com%2Four-people%2Fbill-gates-wealthiest-person%2F&psig=AOvVaw0nHquPP8bRdK5oSD4jwJ1B&ust=1615904640583000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiFw4XAsu8CFQAAAAAdAAAAABAD",
  time: "8:00",
}
// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: "Button",
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: "Button",
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: "large",
//   label: "Button",
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: "small",
//   label: "Button",
// }
