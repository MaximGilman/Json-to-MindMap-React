import { NodeLevel } from "../models/node-level";
import NodeComponent from "../components/Node/Node";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Example/Node",
  component: NodeComponent,
} as ComponentMeta<typeof NodeComponent>;

const Template: ComponentStory<typeof NodeComponent> = (args) => (
  <NodeComponent {...args} />
);

export const Root = Template.bind({});
Root.args = {
  title: "Заголовок",
  level: NodeLevel.Root,
};

export const Group = Template.bind({});
Group.args = {
  title: "Группа",
  level: NodeLevel.Group,
};

export const Subgroup = Template.bind({});
Subgroup.args = {
  title: "Подгруппа",
  level: NodeLevel.Subgroup,
};
