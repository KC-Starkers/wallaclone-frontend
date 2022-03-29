import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { Link } from "react-router-dom";
import { loadAdvertsSelector, uiSelector, loadTagsSelector, getUser  } from "../../store/selectors";


//imports Bea
import Header from "../layout/header";
import { defaultFilters, filterAdverts } from "./filters";
import CheckboxGroup from "../common/Checkbox";
import storage from "../../utils/storage";
import Slider from 'rc-slider';
import { loadTags } from "../../store/actions";
import FilterComp from "./FilterComponent";
import '../../index.css'
import { customtags } from "./provisional";
import CheckboxTags from "../common/Checkbox_Tags";
import StartChat from "../common/StartChat";
import { getPaymentMethods, getUserName } from "../../apicalls";


////
import { mytoken, auth } from "../../store/selectors";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const getFilters = () =>  storage.get('filters')  || defaultFilters;
const saveFilters = filters => storage.set('filters', filters) || defaultFilters;

//TODO de Ivan a mi mismo: paginar con una librería y hacer llamada al api con query (skip y limit)
//TODO: hacer que muestre la foto en el listado (¿tema de la ruta de estáticos en el back?) 





function Home() {

  const [value, setValue] = React.useState ({name: '', offerAdvert: '', price: [] , tags: [], paymentMethods: [], photo: null, experience: []})
  const [filters, setFilters] = React.useState([]);
  //const [myuser, getmyuser] = React.useState('')
  const [username, getusername] = React.useState([])

  const dispatch = useDispatch();

  const ads = useSelector(loadAdvertsSelector);   
  const tags = useSelector(loadTagsSelector);
  const user = useSelector(getUser);

  //
  const autt = useSelector(auth);
  const my = useSelector(mytoken);

  useEffect(() => {
    saveFilters(filters);
    dispatch(loadAdverts());
    dispatch(loadTags());
    //getmyuser(user)
    getUserName(user)
    .then((res) =>{ console.log(res[0]['userName']); getusername(res[0]['userName'])})
    .catch((err) => console.log(err));
    
  }, []);
  var adverts = filterAdverts(ads, value)
  
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

  const { isLoading, error } = useSelector(uiSelector);
  
  return (
      
    <>
    <Header change={handleChange} value={value} user={username}/>
      <br></br>
      <CheckboxTags value={value.tags} change={handleChange} options={tags} name="tags" />
      <div className="container">
      <div className="filters">
        <FilterComp submit={handleSubmit} change={handleChange} value={value} tag={ads}/>
        <br></br>
      </div>
      <div className="adverts">
      <ul className="wrapper"> 
        {adverts.length > 0 ? 
          adverts.map((advert) => (
            <li key={advert._id}>
              <Link to={`/servicios/${advert._id}`}>
                <div>
                  <p><strong>NOMBRE</strong>{advert.name}</p>
                  <p>{advert.offerAdvert? "Buscan" : "Ofrecen"}</p>
                  <p><strong>DESCRIPCIÓN</strong>{advert.description}</p>
                  <p><strong>CATEGORÍAS</strong>{advert.tags}</p>
                  <p><strong>FORMA DE PAGO</strong>{advert.paymentMethods.join(" ")}</p>
                  <p><strong>EXPERIENCIA</strong> <strong>{advert.experience}</strong> años</p>
                  <img src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${advert.advertImage}`} alt={advert.name} />
                  <p><strong>CREADO POR: {advert.createdBy}</strong></p>
                  {console.log(username)}
                  <br></br>
                </div>
              </Link>
              <StartChat chatId={[username, advert.createdBy, advert._id, advert.name]}><strong>ABRIR CHAT</strong></StartChat>
            </li>
        )): <p>no hay anuncios que mostrar :(</p>}
      </ul>
      </div>
      </div>
      </>
  );
}

export default Home;
