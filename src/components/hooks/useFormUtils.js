import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (ev) => {
    const type = ev.target.type;
    switch (type) {
      case "text":
      case "textarea":
      case "select":
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: ev.target.value,
        }));
        break;
      case "select-multiple":
        let selected = Array.from(ev.target.selectedOptions);
        selected = selected.map(option=>option.value)
        console.log(selected)
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: selected,
        }));
        break;
      case "radio":
        setFormData((currentValue) => ({
          ...currentValue,
          [ev.target.name]: Boolean(ev.target.value),
        }));
        break;
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
