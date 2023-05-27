import { FC } from "react";
interface MarkAsReadProps {
  checked: boolean;
  index: number;
  markAsRead: (index: number) => void;
}

const MarkAsRead: FC<MarkAsReadProps> = ({ index, markAsRead, checked }) => (
  <input type="checkbox" checked={checked} onChange={() => markAsRead(index)} />
);
export default MarkAsRead;
