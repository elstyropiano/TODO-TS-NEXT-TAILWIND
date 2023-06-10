import { FC } from "react";
import { RemoveTodoProps } from "../models/TodoModels";

const RemoveTodo: FC<RemoveTodoProps> = ({ handleDeleteTodo, id }) => (
  <button
    className="btn btn-error btn-sm hover:bg-error-hover"
    onClick={() => handleDeleteTodo(id)}
  >
    delete
  </button>
);

export default RemoveTodo;
