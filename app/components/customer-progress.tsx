"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  value: number;
}

export default function CustomerProgress({ value }: Props) {
  return (
    <div className="w-14 h-14">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={{
          path: {
            stroke: "#D4AF37",
          },
          trail: {
            stroke: "#333",
          },
          text: {
            fill: "#fff",
            fontSize: "26px",
          },
        }}
      />
    </div>
  );
}