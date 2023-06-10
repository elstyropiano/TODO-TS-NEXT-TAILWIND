import { FC } from "react";

import { TodoCategoryProps } from "../models/TodoModels";

const TodoCategory: FC<TodoCategoryProps> = ({ category }) => (
  <span className=" w-36 text-2xl font-bold text-gray-300 border  p-2 my-4 text-center bg-neutral-500 uppercase ">
    {category}
  </span>
);

export default TodoCategory;
