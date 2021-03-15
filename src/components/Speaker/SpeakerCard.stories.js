import React from "react"

import SpeakerCard from "./SpeakerCard"

export default {
  component: SpeakerCard,
  title: "Task",
}

const Template = (args) => <SpeakerCard {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
    // siteTitle: "test",
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
}
