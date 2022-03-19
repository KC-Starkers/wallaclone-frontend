import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { Link } from "react-router-dom";
import { loadAdvertsSelector, loadTagsSelector } from "../../store/selectors";
//imports Bea
import Header from "../layout/header";
import { defaultFilters, filterAdverts } from "./filters";
import { useState } from "react";
import storage from "../../utils/storage";
import Slider from 'rc-slider';
import { loadTags } from "../../store/actions";
import FilterComp from "./FilterComponent";
import Button from "../common/button";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const getFilters = () =>  storage.get('filters')  || defaultFilters;
const saveFilters = filters => storage.set('filters', filters) || defaultFilters;

function Home() {

  const [value, setValue] = React.useState ({name: '', sale: '', price: '' , tags: [], photo: null})
  const [filters, setFilters] = React.useState([]);
  const [myads, setmy] = useState([]);
  const [mytags, settags] = useState([])
  const [showfilters, setfiltervisibility] = useState(false)

  React.useEffect(() => {
    saveFilters(filters);
  }, []);


  const dispatch = useDispatch();

  const ads = useSelector(loadAdvertsSelector);
  const tags = useSelector(loadTagsSelector);
  useEffect(() => {
    dispatch(loadAdverts());
    dispatch(loadTags());
    setmy(ads)
    settags(tags)
  }, [mytags]);
  var adverts = filterAdverts(myads, value)
  console.log(value)

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilters = (state) => {
    setfiltervisibility(state)
  }

 // const [formValue, setFormValue] = useState(initialFormValue);
  const handleSubmit = ev => {
    ev.preventDefault();
    setFilters(getFilters())
  };

  console.log(showfilters)
  return (
    /*   TODO: refactorizar en componente ServicesList 
    */
    <>
    <Header ads={adverts}/>
      <div>
          {showfilters ? 
            <FilterComp submit={handleSubmit} change={handleChange} value={value} tag={mytags}/>
             : 
            <Button action={setfiltervisibility(true)} textbutton={"Filtrar anuncios"}/> 
          }  
      </div>
      <ul>
        {adverts.map((advert) => (
          <>
            <li key={advert._id}>
              <Link to={`/adverts/${advert._id}`}>
                <div>
                  <p>{advert.name}</p>
                  <p>{advert.offerAdvert}</p>
                  <p>{advert.de4scription}</p>
                  <p>{advert.tags.join("")}</p>
                  <p>{advert.paymentMethod.join("")}</p>
                  <p>{advert.experience}</p>
                  <img src={advert.image} alt={advert.name} />
                </div>
              </Link>
            </li>
            {/*   <Search/>   */} {/* componente de búsqueda por filtros */}
          </>
        ))}
      </ul></>
  );
}

export default Home;
