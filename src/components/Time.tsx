import { format } from "date-fns";
import type { FunctionComponent } from "react";

type TimeProps = {
  time: Date;
}

const Time: FunctionComponent<TimeProps> = ({ time }) => {
  return (
    <time className="font-mono">{format(time, "MM-dd-yyyy HH:mm OOO")}</time>
  );
};

export default Time;
