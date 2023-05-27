"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { TodoElementProps } from "./models/Todo";

const useTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoElementProps[]>([]);

  const router = useRouter();

  const removeTodo = (index: number): void =>
    setTodoList((prev) => prev.filter((_, idx) => idx !== index));

  const markAsRead = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList[index].checked = !todoList[index].checked;
    setTodoList(newTodoList);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((prev) => [
      ...prev,
      { todo: inputValue, checked: false, category: selectedValue },
    ]);
    setInputValue("");
    setSelectedValue("");
  };

  const navigateTodo = () => router.push("/todo");

  const changeTodoCategory = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ): void => {
    const newTodoList = [...todoList];
    todoList[index].category = e.target.value;
    setTodoList(newTodoList);
  };

  return {
    addTodo,
    inputValue,
    setInputValue,
    todoList,
    setTodoList,
    removeTodo,
    markAsRead,
    selectedValue,
    setSelectedValue,
    changeTodoCategory,
    navigateTodo,
  };
};

export default useTodo;
