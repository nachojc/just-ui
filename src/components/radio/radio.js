import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const RadioButton = forwardRef(function RadioButton({ children, isError, className, readOnly, ...restProps }, ref) {
  const radioClass = cn("radio", { "radio--error": isError }, className);
  const labelClass = cn({
    "radio--disabled": restProps.disabled,
    "radio--readonly": readOnly,
  });
  const disabled = restProps.disabled || readOnly;

  return (
    <div className={radioClass}>
      <input type="radio" {...restProps} disabled={disabled} ref={ref} />
      <label className={labelClass} htmlFor={restProps.id}>
        {children}
      </label>
    </div>
  );
});

export default RadioButton;

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  readOnly: PropTypes.bool,
};
