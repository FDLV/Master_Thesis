import Notification from "../components/Notification.js";

export default {
  title: "Example/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Заголовок уведомления" },
    text: { description: "Текст уведомления" },
    mode: {
      description: "Тип уведомления",
    },
    isShow: { description: "Видимость уведомления" },
  },
};

export const Success = {
  args: {
    title: "Заголовок",
    text: "Текст уведомления",
    mode: "success",
    isShow: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Error = {
  args: {
    title: "Заголовок",
    text: "Текст уведомления",
    mode: "error",
    isShow: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Other = {
  args: {
    title: "Заголовок",
    text: "Текст уведомления",
    mode: "",
    isShow: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100px" }}>
        <Story />
      </div>
    ),
  ],
};
