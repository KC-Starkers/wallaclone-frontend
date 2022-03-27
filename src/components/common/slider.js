import { Range } from "rc-slider";
import '../../../node_modules/rc-slider/assets/index.css';

function SliderRange({ change, value }) {
  const min = 0;
  const max = 100;

  const handleChange = ([minValue, maxValue]) => {
    change({
      target: { name: "price", value: [minValue || min, maxValue || max] },
    });
  };
  return (
    <Range
      onChange={handleChange}
      min={min}
      max={max}
      //value={value.price}
      name="price"
      pushable={false}
      style={{ width: 400, margin: 24 }}
      marks={{ [min]: min, [max]: max }}
    />
  );
}

export default SliderRange;
