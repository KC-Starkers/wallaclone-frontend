function CheckBuySell({value, change, ...props }) {
    const handleChange = ev => {
      const { name, checked, value: optionValue } = ev.target;
      change({
        target: {
          name,
          value: checked
            ? optionValue
            : '',
        },
      });
    };
  
    return (
      <div>
        <label>
          <input
            name="offerAdvert"
            type="checkbox"
            value='true'
            checked={value.includes('true')}
            onChange={handleChange}
          />
        Se ofrece
        </label>
        <label>
          <input
            type="checkbox"
            name="offerAdvert"
            value='false'
            checked={value.includes('false')}
            onChange={handleChange}
          />
          Se busca
        </label>
      </div>
    );
  }
  

export default CheckBuySell;