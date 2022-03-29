
import CheckboxGroup from "../common/Checkbox"
import CheckBuySell from "../common/Checkbox_sell"
import SliderRange from "../common/slider"
import SearchBar from "../common/searchbar"
import { customtags, custompay } from "./provisional"
import { getPaymentMethods } from "../../apicalls"
import { useEffect, useState } from "react"

function FilterComp({change, value}){ 

  const [paymeth, getpaymeth] = useState([])
  useEffect(async() => {
    let pm = await getPaymentMethods()
    getpaymeth(pm.result)
  }, [])
  return (
      //<form onSubmit={submit}>
      //<input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={change} ></input>
    <div className="filter_menu">
        <br></br>
        <h3>🤔 Filtrar por nombre 🤔</h3>
        <SearchBar value={value.name} change={change} />
        <br></br>
        {
        /*
            <br></br>
            <h3>🏷️ Filtrar por #etiquetas 🏷️</h3>
            <CheckboxGroup value={value.tags} change={change} options={customtags} name="tags"/>
        */
        }
        <br></br>
        <h3>💸 Filtrar por método de pago 💳</h3>
        <CheckboxGroup value={value.paymentMethods} change={change} options={paymeth} name={"paymentMethods"}/>
        <br></br>
        <h3>🤝 Filtrar por oferta y demanda 🤝</h3>
        <CheckBuySell value={value.offerAdvert} change={change}/>
        <br></br>
        <h3>🤝 Filtrar por precio 🤝</h3>
        <SliderRange value={value.price} change={change} name={"price"}/>
        <br></br>
        <h3>🤓 Filtrar por experiencia 🤓</h3>
        <SliderRange value={value.experience} change={change}/>
    </div>
  )
}

export default FilterComp