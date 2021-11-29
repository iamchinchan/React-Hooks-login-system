import React, { useEffect, useRef, useImperativeHandle } from "react";
import classes from "./InputField.module.css";
const InputField = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  // useEffect(()=>{
  // inputRef.current.focus();
  // },[]);

  const activateFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activateFocus,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});
export default InputField;
