import ActionTitle from "../components/ActionTitle.js";

export default {
  title: "Example/ActionTitle",
  component: ActionTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Текст заголовка" },
    buttons: { description: "Кнопки заголовка" },
  },
};

export const Primary = {
  args: {
    title: "Задания",
    buttons: [
      { id: 1, tooltip: "Создать", type: "create", action: "" },
      { id: 1, tooltip: "Редактировать", type: "edit", action: "" },
      { id: 0, tooltip: "Удалить", type: "delete", action: "" },
    ],
  },
};
