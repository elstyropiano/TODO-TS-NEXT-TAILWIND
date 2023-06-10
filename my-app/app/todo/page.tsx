"use client";

import { FC } from "react";

import useTodo from "../useTodo";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo: FC = () => {
  const {
    changeTodoCategory,
    error,
    handleCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
    inputValue,
    loading,
    selectedValue,
    setInputValue,
    setSelectedValue,
    todos,
  } = useTodo();

  return (
    <div className="pt-8">
      <AddTodo
        handleCreateTodo={handleCreateTodo}
        inputValue={inputValue}
        selectedValue={selectedValue}
        setInputValue={setInputValue}
        setSelectedValue={setSelectedValue}
      />
      <TodoList
        loading={loading}
        todos={todos}
        error={error}
        handleDeleteTodo={handleDeleteTodo}
        handleCheckbox={handleCheckbox}
        changeTodoCategory={changeTodoCategory}
      />
    </div>
  );
};

export default Todo;
