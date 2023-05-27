import { ChangeEvent, FC } from "react";
interface ChangeCategoryProps {
  index: number;
  category: string;
  changeTodoCategory: (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
}
const ChangeCategory: FC<ChangeCategoryProps> = ({
  index,
  changeTodoCategory,
  category,
}) => (
  <select value={category} onChange={(e) => changeTodoCategory(e, index)}>
    <option value="work">work</option>
    <option value="house">house</option>
  </select>
);

export default ChangeCategory;
