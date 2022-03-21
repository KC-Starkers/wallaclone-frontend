function CheckboxTags({value, change, options, name }) {
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
      <div className="tag_container">
        {options.map(option => (
          <>
          <input
            className="invisible_check"
            name={name}
            id={option}
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          <label key={option} className="tag_label" for={option}>{option}</label>
            </>
        ))}
      </div>
    );
  }
  

export default CheckboxTags;