import { FC } from "react";

import { AddTodoProps } from "../models/TodoModels";

const AddTodo: FC<AddTodoProps> = ({
  handleCreateTodo,
  inputValue,
  setInputValue,
  selectedValue,
  setSelectedValue,
}) => (
  <form onSubmit={(e) => handleCreateTodo(e)}>
    <div className="flex flex-col space-y-4 ">
      <div className="flex justify-center">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Todo description"
          className="input input-bordered  w-full max-w-xs"
        />
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
          className="select select-bordered  "
        >
          <option value="">select type</option>
          <option value="work">work</option>
          <option value="home">home</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          disabled={selectedValue === "" || inputValue === ""}
          type="submit"
          className="btn btn-accent w-22px"
        >
          Add todo
        </button>
      </div>
    </div>
  </form>
);

export default AddTodo;
