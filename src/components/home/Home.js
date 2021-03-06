import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { Link } from "react-router-dom";
import {
  loadAdvertsSelector,
  uiSelector,
  loadTagsSelector,
  getUser,
  isLoggedSelector,
} from "../../store/selectors";

//imports Bea
import Header from "../layout/header";
import { defaultFilters, filterAdverts } from "./filters";
import CheckboxGroup from "../common/Checkbox";
import storage from "../../utils/storage";
import Slider from "rc-slider";
import { loadTags } from "../../store/actions";
import FilterComp from "./FilterComponent";
import { customtags } from "./provisional";
import CheckboxTags from "../common/Checkbox_Tags";
import StartChat from "../common/StartChat";
import AdvertCard from "../common/AdvertCard";
import ReactPaginate from "react-paginate";
import PaginationAdverts from "./PaginationAdverts";

import { getPaymentMethods, getUserName } from "../../apicalls";

////
import { mytoken, auth } from "../../store/selectors";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const getFilters = () => storage.get("filters") || defaultFilters;
const saveFilters = (filters) =>
  storage.set("filters", filters) || defaultFilters;

//TODO: hacer que muestre la foto en el listado (¿tema de la ruta de estáticos en el back?)

function Home() {
  const [value, setValue] = React.useState({
    name: "",
    offerAdvert: "",
    price: [],
    tags: [],
    paymentMethods: [],
    photo: null,
    experience: [],
  });

  
  const [filters, setFilters] = React.useState([]);
  //const [myuser, getmyuser] = React.useState('')
  const user = useSelector(getUser);
    const [username, getusername] = useState('');
    
    useEffect(() => {
        //}, [])
        console.log(user)
        getUserName(user)
            .then((res) => {
            getusername(res[0]["userName"]);
            })
            .catch((err) => console.log(err));
        
    }, []);



  const dispatch = useDispatch();

  const ads = useSelector(loadAdvertsSelector);
  const tags = useSelector(loadTagsSelector);

  //
  const autt = useSelector(auth);
  const my = useSelector(mytoken);

  useEffect(() => {
    saveFilters(filters);
    dispatch(loadAdverts());
    dispatch(loadTags());
/*
    getUserName(user)
      .then((res) => {
        getusername(res[0]["userName"]);
      })
      .catch((err) => console.log(err));*/
  }, []);

  var adverts = filterAdverts(ads, value);

  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // const [formValue, setFormValue] = useState(initialFormValue);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFilters(getFilters());
  };

  const { isLoading, error } = useSelector(uiSelector);

  return (
    <>
    <p>bienvenido{username}</p>
      <div className="sticky top-0 z-10">
        <Header change={handleChange} value={value}/>
      </div>
      <div className="grid grid-cols-6 gap-3 p-3">
        <div className="grid grid-cols-6 lg:col-span-4 md:col-span-3 gap-3 col-span-full">
          <PaginationAdverts itemsPerPage={9} adverts={adverts} />
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-full">
          <div className="md:sticky top-20">
            <FilterComp
              submit={handleSubmit}
              change={handleChange}
              value={value}
              tag={ads}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
