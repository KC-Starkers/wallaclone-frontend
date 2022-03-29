function CheckboxGroup({value, change, options, name }) {
    const handleChange = ev => {
      const { name, checked, value: optionValue } = ev.target;

      change({
        target: {
          name,
          value: checked
            ? [...value, optionValue]
            : value.filter(v => v !== optionValue),
        },
      });

    };
    return (
      <div>
        {options.map(option => (
          <label key={option}>
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