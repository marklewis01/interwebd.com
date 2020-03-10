import { h } from "preact";

// styles
import "./neon.css";

export const Neon = ({ text }: { text: string }) => {
  return (
    <div className="dark-back swing">
      <div className="neon">{text}</div>
    </div>
  );
};
