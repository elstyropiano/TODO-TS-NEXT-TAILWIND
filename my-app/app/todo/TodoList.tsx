import { FC } from "react";

import RemoveTodo from "./RemoveTodo";
import MarkAsRead from "./MarkAsRead";
import ChangeCategory from "./ChangeCategory";
import { ListProps } from "../models/Todo";

const TodoList: FC<ListProps> = ({
  todoList,
  removeTodo,
  markAsRead,
  changeTodoCategory,
}) => (
  <div>
    <h2>TODO LIST</h2>
    <ol>
      {todoList.map(({ todo, checked, category }, index) => (
        <li key={todo}>
          <>
            {todo}
            <RemoveTodo index={index} removeTodo={removeTodo} />
            <MarkAsRead
              checked={checked}
              index={index}
              markAsRead={markAsRead}
            />
            <ChangeCategory
              index={index}
              changeTodoCategory={changeTodoCategory}
              category={category}
            />
          </>
        </li>
      ))}
    </ol>
  </div>
);

export default TodoList;
