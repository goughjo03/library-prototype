// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  /*π The args you need here will depend on your component */
  children: 'Hello Button',
};