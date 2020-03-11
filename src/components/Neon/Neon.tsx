import { h } from "preact";

// styles
import "./neon.css";

export const Neon = ({
  text,
  power = true
}: {
  text: string;
  power?: boolean;
}) => {
  return (
    <div className={power ? "dark-back swing" : "dark-back-off"}>
      <div className={power ? "neon neon-on" : "neon neon-off"}>{text}</div>
    </div>
  );
};
