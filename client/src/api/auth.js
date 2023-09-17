import { config } from "../config/address";

// Получить все задания
export const auth_user = async (body) => {
  const url = `http://${config.address}/auth`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      //   "Authorization": token,
    },
    body: body,
  };

  const response = await fetch(url, params);
  return response;
};
