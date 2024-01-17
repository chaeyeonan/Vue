import jsonData from "../assets/todoData.json";

export const InsertData = (keywords) => {
  if (keywords.trim())
    jsonData.todoData.push({
      id: Math.floor(Math.random() * 10000),
      task: keywords,
      done: false,
      createdDate: "2023-01-16",
    });

  keywords = "";
};
