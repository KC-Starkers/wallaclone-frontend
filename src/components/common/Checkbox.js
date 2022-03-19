function CheckboxGroup({value, change, ...props }) {
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
        <label>
          <input
            name="tags"
            type="checkbox"
            value='idiomas'
            checked={value.includes('idiomas')}
            onChange={handleChange}
          />
          idiomas
        </label>
        <label>
          <input
            type="checkbox"
            name="tags"
            value='motor'
            checked={value.includes('motor')}
            onChange={handleChange}
          />
          motor
        </label>
      </div>
    );
  }
  

export default CheckboxGroup;