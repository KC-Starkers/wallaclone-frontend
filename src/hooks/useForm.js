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
      case "select":
      setFormData((currentValue)=> ({...currentValue, [ev.target.name]: }))
      // case "file":
      // case "radio":
      // case "select-multiple":
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