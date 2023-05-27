export interface ListProps {
  todoList: TodoElementProps[];
  removeTodo: (index: number) => void;
  markAsRead: (index: number) => void;
  changeTodoCategory: (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}

export type TodoElementProps = {
  todo: string;
  checked: boolean;
  category: string;
};
