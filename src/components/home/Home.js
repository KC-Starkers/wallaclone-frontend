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
import MainButton from "../common/main_button";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const getFilters = () =>  storage.get('filters')  || defaultFilters;
const saveFilters = filters => storage.set('filters', filters) || defaultFilters;

function Home() {

  const [value, setValue] = React.useState ({name: '', offerAdvert: '', price: [] , tags: [], paymentMethod: [], photo: null})
  const [filters, setFilters] = React.useState([]);

  const dispatch = useDispatch();

  const ads = useSelector(loadAdvertsSelector);
  //const tags = useSelector(loadTagsSelector);
  const tags = 'useSelector(loadTagsSelector)';

  useEffect(() => {
    saveFilters(filters);
    dispatch(loadAdverts());
    dispatch(loadTags());
  }, [tags]);
 
  var adverts = filterAdverts(ads, value)
  
  const handleChange = event => {
    console.log(event)
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

 // const [formValue, setFormValue] = useState(initialFormValue);
  const handleSubmit = ev => {
    ev.preventDefault();
    setFilters(getFilters())
  };

  return (
    /*   TODO: refactorizar en componente ServicesList 
    */
    <>
    <Header ads={adverts}/>
      <br></br>
      <div>
        <FilterComp submit={handleSubmit} change={handleChange} value={value} tag={ads}/>
        <br></br>
      </div>
      <ul>
        
        {adverts.length > 0 ? 
        adverts.map((advert) => (
          <>
            <li key={advert._id}>
              <Link to={`/adverts/${advert._id}`}>
                <div>
                  <p>{advert.name}</p>
                  <p>{advert.offerAdvert + "oferta!!!!"}</p>
                  <p>{advert.description}</p>
                  <p>{advert.tags.join("")}</p>
                  <p>{advert.paymentMethod.join("")}</p>
                  <p>{advert.experience}</p>
                  <img src={advert.image} alt={advert.name} />
                </div>
              </Link>
            </li>
            {/*   <Search/>   */} {/* componente de búsqueda por filtros */}
          </>
        )): <p>no hay anuncios que mostrar :(</p>}
      </ul></>
  );
}

export default Home;
