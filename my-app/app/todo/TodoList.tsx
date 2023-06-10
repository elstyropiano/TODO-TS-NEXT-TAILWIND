import { FC } from "react";

import Todo from "./Todo";
import TodoCategory from "./TodoCategory";
import { ListProps } from "../models/TodoModels";

const TodoList: FC<ListProps> = ({
  handleCheckbox,
  handleDeleteTodo,
  changeTodoCategory,
  loading,
  error,
  todos,
}) => (
  <div className="flex flex-col items-center space-y-4 mt-8 mx-5">
    <h1 className="text-3xl font-bold text-neutral-500">TODO LIST</h1>
    {error && <div>...error</div>}
    <ul className="space-y-2 flex flex-col w-full">
      <TodoCategory category="work" />
      {loading && <span>loading...</span>}
      {todos
        ?.filter(({ category }) => category === "work")
        .map(({ category, checked, id, title }, index) => (
          <>
            <Todo
              category={category}
              title={title}
              id={id}
              key={id}
              checked={checked}
              index={index}
              changeTodoCategory={changeTodoCategory}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckbox={handleCheckbox}
            />
          </>
        ))}
      <TodoCategory category="home" />
      {loading && <span>loading...</span>}
      {todos
        ?.filter(({ category }) => category === "home")
        .map(({ category, checked, id, title }, index) => (
          <>
            <Todo
              category={category}
              title={title}
              id={id}
              key={id}
              checked={checked}
              index={index}
              changeTodoCategory={changeTodoCategory}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckbox={handleCheckbox}
            />
          </>
        ))}
    </ul>
  </div>
);

export default TodoList;
