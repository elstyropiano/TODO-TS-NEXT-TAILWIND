import { FC } from "react";
import { ChangeCategoryProps } from "../models/TodoModels";

const ChangeCategory: FC<ChangeCategoryProps> = ({
  id,
  changeTodoCategory,
  category,
}) => (
  <select
    className="select select-bordered select-sm"
    value={category}
    onChange={(e) => changeTodoCategory(e, id)}
  >
    <option value="work">work</option>
    <option value="home">home</option>
  </select>
);

export default ChangeCategory;
