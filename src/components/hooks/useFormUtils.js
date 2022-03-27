import { useState } from "react";

const useForm = (initialValues) => {
  const [formValue, setformValue] = useState(initialValues);

  const handleChange = (ev) => {
    const type = ev.target.type;
    switch (type) {
      case "text":
      case "textarea":
      case "select":
      case "file":
        setformValue((currentValue) => ({
          ...currentValue,
          [ev.target.name]: ev.target.value,
        }));
        break;
      case "select-multiple":
        let selected = Array.from(ev.target.selectedOptions);
        selected = selected.map(option=>option.value)
        console.log(selected)
        setformValue((currentValue) => ({
          ...currentValue,
          [ev.target.name]: selected,
        }));
        break;
      case "radio":
        setformValue((currentValue) => ({
          ...currentValue,
          [ev.target.name]: Boolean(ev.target.value),
        }));
        break;
      // setformValue((currentValue) =>
      //   ev.target.checked
      //     ? {
      //         ...currentValue,
      //         [ev.target.name]: ev.target.value === "true" ? true : false,
      //       }
      //     : { ...currentValue }
      // );

      // case "select-multiple":
      // case "file":
      default:
        setformValue((currentValue) => ({
          ...currentValue,
          [ev.target.name]: ev.target.value,
        }));
    }
  };
  return {
    formValue,
    setformValue,
    handleChange,
  };
};

export default useForm;