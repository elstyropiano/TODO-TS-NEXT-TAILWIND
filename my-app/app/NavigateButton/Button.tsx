"use client";

import useTodo from "../useTodo";

const Button = () => {
  const { navigateTodo } = useTodo();
  return (
    <button className="btn" onClick={navigateTodo}>
      Create Todo List
    </button>
  );
};

export default Button;
