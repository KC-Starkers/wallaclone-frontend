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
            name="paymentMethod"
            type="checkbox"
            value='cash'
            checked={value.includes('cash')}
            onChange={handleChange}
          />
          idiomas
        </label>
        <label>
          <input
            type="checkbox"
            name="paymentMethod"
            value='debit'
            checked={value.includes('debit')}
            onChange={handleChange}
          />
          motor
        </label>
      </div>
    );
  }
  

export default CheckboxGroup;