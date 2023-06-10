"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

import { Todo } from "./models/TodoModels";
import {
  UPDATE_TODO,
  GET_TODOS,
  GET_USER,
  CREATE_TODO_MUTATION,
  DELETE_TODO,
} from "./mutations";

const useTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const { loading, error, data, refetch } = useQuery(GET_TODOS);

  const { data: userData } = useQuery(GET_USER);

  const [updateTodo] = useMutation(UPDATE_TODO);
  const [createTodo] = useMutation(CREATE_TODO_MUTATION);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const router = useRouter();

  const { id } = userData?.users[0] || {};

  const { todos }: { todos?: Todo[] } = data || {};

  const handleDeleteTodo = async (id: number): Promise<void> => {
    try {
      await deleteTodo({ variables: { id: id.toString() } });
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckbox = async (
    id: number,
    checked: boolean
  ): Promise<void> => {
    try {
      await updateTodo({
        variables: { id, data: { checked: !checked } },
      });
      refetch();
    } catch (error) {
      console.error("Error updating Todo:", error);
    }
  };

  const handleCreateTodo = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await createTodo({
        variables: {
          data: {
            title: inputValue,
            category: selectedValue,
            checked: false,
            author: {
              connect: {
                id,
              },
            },
            publishedAt: new Date().toISOString(),
          },
        },
      });
      setInputValue("");
      setSelectedValue("");
      refetch();
    } catch (err) {
      console.log(err, "error");
    }
  };

  const navigateTodo = () => router.push("/todo");

  const changeTodoCategory = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ): Promise<void> => {
    const category = e.target.value;
    try {
      await updateTodo({
        variables: { id, data: { category } },
      });
      refetch();
    } catch (error) {
      console.error("Error updating Todo:", error);
    }
  };

  return {
    changeTodoCategory,
    error,
    handleCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
    inputValue,
    loading,
    navigateTodo,
    selectedValue,
    setInputValue,
    setSelectedValue,
    todos,
  };
};

export default useTodo;
