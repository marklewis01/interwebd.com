import { h } from "preact";

// styles
import "./lightSwitch.css";

export const LightSwitch = ({
  checked,
  onClick,
  disabled,
  switchOnly
}: {
  checked: boolean;
  onClick: h.JSX.MouseEventHandler<HTMLInputElement>;
  disabled?: boolean;
  switchOnly?: boolean;
}) => (
  <div id="light-switch-root">
    <input
      type="checkbox"
      id="light-switch"
      checked={checked}
      onClick={onClick}
      disabled={disabled}
    />
    <label
      for="light-switch"
      id="light-switch-label"
      class={switchOnly ? "switch-only" : null}
    >
      {switchOnly ? null : <div className="screw"></div>}
      <div className={switchOnly ? "switch" : "switch switch-plate"}></div>
      {switchOnly ? null : <div className="screw"></div>}
    </label>
    <div id="background"></div>
  </div>
);
