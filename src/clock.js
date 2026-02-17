import React, { useState } from "react";
import moment from "moment";

export default function Clock({ theme }) {
  const [time, setTime] = useState(moment());

  function updateClock() {
    setTime(moment());
  }

  const interval = setInterval(updateClock, 60000);
  clearInterval(interval);
  return (
    <p className="time" style={{ backgroundColor: theme.colour }}>
      {time.format("LT")}
    </p>
  );
}
