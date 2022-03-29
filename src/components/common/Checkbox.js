function CheckboxGroup({value, change, options, name }) {
    const handleChange = ev => {
      const { name, checked, value: optionValue } = ev.target;
      debugger
      change({
        target: {
          name,
          value: checked
            ? [...value, optionValue]
            : value.filter(v => v !== optionValue),
        },
      });
      debugger
    };
  console.log(options)
    return (
      <div>
        {options.map(option => (
          <label key={option}>
            {console.log(option)}
            <input
              name={name}
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
  

export default CheckboxGroup;