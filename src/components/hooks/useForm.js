import React from "react";
import Header from "../layout/header";
import { defaultFilters, filterAdverts } from "./filters";
import CheckboxGroup from "../common/Checkbox";
import storage from "../../utils/storage";
import Slider from "rc-slider";
import { loadTags } from "../../store/actions";

function useForm(initialFormValue) {
  const getValueByType = {
    checkbox: ({ checked }) => checked,

    number: ({ value }) => Number(value),

    "select-multiple": ({ selectedOptions }) =>
      [...selectedOptions].map(({ value }) => value),

    file: ({ files }) => files[0] || null,
  };

  const defaultGetValue = ({ value }) => value;

  const [formValue, setFormValue] = React.useState(initialFormValue);

  const updateFormValue = (name, value) => {
    setFormValue((currentFormValue) => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const handleChange = (ev) => {
    const valueGetter = getValueByType[ev.target.type] || defaultGetValue;
    updateFormValue(ev.target.name, valueGetter(ev.target));
  };

  const handleSubmit = (onSubmit) => (ev) => {
    ev.preventDefault();
    onSubmit(formValue);
  };

  const validate = (...validations) =>
    validations
      .map((validation) => validation(formValue))
      .every((valid) => valid);

  return {
    formValue,
    setFormValue,
    handleChange,
    handleSubmit,
    validate,
  };
}

export default useForm;
