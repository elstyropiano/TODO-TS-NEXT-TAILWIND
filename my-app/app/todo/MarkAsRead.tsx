import { FC } from "react";
import { MarkAsReadProps } from "../models/TodoModels";

const MarkAsRead: FC<MarkAsReadProps> = ({ handleCheckbox, checked, id }) => (
  <input
    className="checkbox checkbox-accent checkbox-xl"
    type="checkbox"
    checked={checked}
    onChange={() => handleCheckbox(id, checked)}
  />
);

export default MarkAsRead;
