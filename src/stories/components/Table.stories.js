// TablePackage/Table.stories.js
import React from "react";
import StoryTable from "../../components/Table";

export default {
  title: "Example/Table",
  component: StoryTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const data = JSON.stringify([
  { Name: "Alice", Age: 30 },
  { Name: "Bob", Age: 25 },
]);

export const Table = {
  args: {
    data: data,
    type: "sorting",
  },
};
// export const RadioTable = () => <Table data={data} type="radio" />;
// export const CheckboxTable = () => <Table data={data} type="checkbox" />;
