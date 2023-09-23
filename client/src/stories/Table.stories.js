import Table from "../components/Table.js";

export default {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    titles: { description: "Заголовки столбцов таблицы" },
    data: { description: "Данные для заполнения таблицы" },
    mode: { description: "Тип таблицы" },
    navigate_from_row: { description: "Функция перенаправления по нажатию на строку таблицы" },
  },
};

export const Primary = {
  args: {
    titles: [
      { id: 0, name: "заголовок 1" },
      { id: 1, name: "заголовок 2" },
      { id: 2, name: "заголовок 3" },
    ],
    data: [
      { id: 993, values: ["q", "ddd", "fgh"], redirect_to: "description" },
      { id: 122323, values: ["gfh", "asdd", "nfgh"], redirect_to: "description" },
      { id: 1533, values: ["fq", "aaddd", "lfgh"], redirect_to: "description" },
      { id: 1534453, values: ["fq", "nddd", "afgh"], redirect_to: "description" },
    ],
    mode: "read",
    navigate_from_row: () => {
      console.log("navigate to somewhere");
    },
  },
};
