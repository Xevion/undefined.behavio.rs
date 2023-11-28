// import { formatInTimeZone } from "date-fns-tz";
import { format } from "date-fns-tz";
import type { FunctionComponent } from "react";

type TimeProps = {
  time: Date;
}

const Time: FunctionComponent<TimeProps> = ({ time }) => {
  return (
    <time className="font-mono">{format(time, "MM-dd-yyyy HH:mm OOOO")}</time>
  );
};

export default Time;
