import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (ev) => {
    const type = ev.target.type;
    switch (type) {
      case "text":
      case "textarea":
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: ev.target.value,
        }));
        break;
      case "radio":
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: Boolean(ev.target.value),
        }));
        break;
      // setFormData((currentValue) =>
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
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: ev.target.value,
        }));
    }
  };
  return {
    formData,
    setFormData,
    handleChange,
  };
};

export default useForm;
