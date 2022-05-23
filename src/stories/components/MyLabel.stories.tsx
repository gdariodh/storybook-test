import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/Etiquetas/MyLabel",
  component: MyLabel,
  argTypes: {
      size: {control: 'select'},
      color: {control: 'select'},
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

// variantes del template 

// son el template pero con args o props por default

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, // true: capitalizar todo la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", // primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};
