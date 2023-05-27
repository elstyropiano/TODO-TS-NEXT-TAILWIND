"use client";
import useTodo from "../useTodo";
import { FC } from "react";
import TodoList from "./TodoList";

const Todo: FC = () => {
  const {
    addTodo,
    inputValue,
    setInputValue,
    todoList,
    removeTodo,
    markAsRead,
    selectedValue,
    setSelectedValue,
    changeTodoCategory,
  } = useTodo();

  return (
    <>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          <option value="">select type</option>
          <option value="work">work</option>
          <option value="house">house</option>
        </select>

        <button
          disabled={selectedValue === "" || inputValue === ""}
          type="submit"
        >
          Add todo
        </button>
      </form>
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        markAsRead={markAsRead}
        changeTodoCategory={changeTodoCategory}
      />
    </>
  );
};

export default Todo;
