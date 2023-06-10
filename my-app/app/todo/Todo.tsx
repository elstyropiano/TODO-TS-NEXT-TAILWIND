import { FC } from "react";

import RemoveTodo from "./RemoveTodo";
import MarkAsRead from "./MarkAsRead";
import ChangeCategory from "./ChangeCategory";
import { TodoProps } from "../models/TodoModels";

const Todo: FC<TodoProps> = ({
  id,
  title,
  index,
  handleDeleteTodo,
  checked,
  handleCheckbox,
  changeTodoCategory,
  category,
}) => (
  <li key={id} className="flex items-start space-x-3">
    <span className="text-xl w-full break-all"> {title}</span>
    <div className="flex space-x-2 items-center">
      <MarkAsRead
        checked={checked}
        index={index}
        id={id}
        handleCheckbox={handleCheckbox}
      />
      <ChangeCategory
        id={id}
        changeTodoCategory={changeTodoCategory}
        category={category}
      />
      <RemoveTodo index={index} handleDeleteTodo={handleDeleteTodo} id={id} />
    </div>
  </li>
);

export default Todo;
