"use client";

import { FC } from "react";
interface RemoveTodoProps {
  index: number;
  removeTodo: (index: number) => void;
}
const RemoveTodo: FC<RemoveTodoProps> = ({ removeTodo, index }) => (
  <button
    onClick={() => removeTodo(index)}
    style={{ border: "1px solid black" }}
  >
    delete
  </button>
);

export default RemoveTodo;
