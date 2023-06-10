import { ApolloError } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ListProps {
  todos: TodoElementProps[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  handleCheckbox: (id: number, checked: boolean) => Promise<void>;
  handleDeleteTodo: (id: number) => Promise<void>;
  changeTodoCategory: (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}

export type TodoElementProps = {
  title: string;
  checked: boolean;
  category: string;
  id: number;
};

export interface Todo {
  category: string;
  title: string;
  id: number;
  checked: boolean;
}

export interface ChangeCategoryProps {
  id: number;
  category: string;
  changeTodoCategory: (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}

export interface MarkAsReadProps {
  checked: boolean;
  index: number;
  handleCheckbox: (id: number, checked: boolean) => Promise<void>;
  id: number;
}

export interface RemoveTodoProps {
  id: number;
  index: number;

  handleDeleteTodo: (id: number) => Promise<void>;
}

export interface TodoProps {
  id: number;
  title: string;
  index: number;
  handleDeleteTodo: (id: number) => Promise<void>;
  checked: boolean;
  handleCheckbox: (id: number, checked: boolean) => Promise<void>;
  changeTodoCategory: (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  category: string;
}

export interface TodoCategoryProps {
  category: string;
}

export interface AddTodoProps {
  handleCreateTodo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  selectedValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}
