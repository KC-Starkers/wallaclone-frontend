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

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const getFilters = () =>  storage.get('filters')  || defaultFilters;
const saveFilters = filters => storage.set('filters', filters) || defaultFilters;

function Home() {

  const [value, setValue] = React.useState ({name: '', sale: '', price: '' , tags: [], photo: null})
  const [filters, setFilters] = React.useState([]);
  const [myads, setmy] = useState([]);
  const [mytags, settags] = useState([])

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
      <div>
          <form onSubmit={handleSubmit}>
            <input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={handleChange} ></input>
            <br></br>
            {mytags.map(option => (
              <label key={option}>
                <input
                  type="checkbox"
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
            <br></br>
            <button className="text-white bg-gray-600 border-l " type="submit">
                Search
            </button>
          </form>
      </div>
      <ul>
        {adverts.map((advert) => (
          <>
            <li key={advert._id}>
              <Link to={`/adverts/${advert._id}`}>
                <div>
                  <p>{advert.name}</p>
                  <p>{advert.offerAdvert}</p>
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
        ))}
      </ul></>
  );
}

export default Home;
