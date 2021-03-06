// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from ".";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text Input",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  /*π The args you need here will depend on your component */
  placeholder: "This is a plarcholder",
};

export const WithoutPlaceholder = Template.bind({});

WithoutPlaceholder.args = {
  /*π The args you need here will depend on your component */
  placeholder: undefined,
  label: "This is a label",
};
