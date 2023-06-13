import React from "react";

const CustomDatePickerInput = React.forwardRef<
  HTMLInputElement,
  { onClick: () => void; value: string }
>(({ onClick, value }, ref) => (
  <input
    type="text"
    className="custom-datepicker-input"
    onClick={onClick}
    value={value}
    ref={ref}
    readOnly
  />
));

export default CustomDatePickerInput;
