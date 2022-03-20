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

function FilterComp({submit, change, value, tag}){
  return (
      <form onSubmit={submit}>
      <input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={change} ></input>
      <br></br>
      <CheckboxGroup value={value.tags} change={change}/>
      <CheckboxGroup value={value.paymentMethod} change={change}/>
      <CheckBuySell value={value.offerAdvert} change={change}/>
      <br></br>

    </form>
  )
}

export default FilterComp