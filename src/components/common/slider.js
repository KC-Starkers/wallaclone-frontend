import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function SliderRange({change, value}){

    const min = 0;
    const max = 10;
    const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
    
  const handleChange = ([minValue, maxValue]) => {
    change({ target: { name: 'price', value: [minValue || min, maxValue || max] } });
  };
    return (
      /*
      <Range 
      min={min}
      max={max}
      value={value.price}
      name="price"
      onChange={handleChange} />
      */
        <Range onChange={handleChange} 
        range={2}
        min={min}
        max={max}
        value={value.price}
        pushable="true"
        name="price"
        style={{ width: 400, margin: 24 }}
        marks={{ [min]: min, [max]: max }} />
    )
}

export default SliderRange