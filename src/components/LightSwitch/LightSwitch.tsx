import { h } from "preact";

// styles
import "./lightSwitch.css";

export const LightSwitch = ({
  checked,
  onClick,
  disabled
}: {
  checked: boolean;
  onClick: h.JSX.MouseEventHandler<HTMLInputElement>;
  disabled?: boolean;
}) => (
  <div style={{ position: "absolute", bottom: 25, left: 25 }}>
    <input
      type="checkbox"
      id="light-switch"
      checked={checked}
      onClick={onClick}
      disabled={disabled}
    />
    <label for="light-switch" id="light-switch-label">
      <div class="screw"></div>
      <div class="switch"></div>
      <div class="screw"></div>
    </label>
    <div id="background"></div>
  </div>
);
