/*


      {tag.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={change}
          />
          {option}
        </label>
      ))}

*/

import CheckboxGroup from "../common/Checkbox"
import CheckBuySell from "../common/Checkbox_sell"
import SliderRange from "../common/slider"
import SearchBar from "../common/searchbar"

function FilterComp({change, value}){ 
  return (
      //<form onSubmit={submit}>
      //<input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={change} ></input>
      <div>
      <SearchBar value={value.name} change={change} />
      <br></br>
      <CheckboxGroup value={value.tags} change={change}/>
      <CheckboxGroup value={value.paymentMethod} change={change}/>
      <CheckBuySell value={value.offerAdvert} change={change}/>
      <br></br>
      <SliderRange value={value.price} change={change}/>
    </div>
  )
}

export default FilterComp