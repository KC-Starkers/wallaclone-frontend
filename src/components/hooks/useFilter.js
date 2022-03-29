import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts, loadTags } from "../../store/actions";
import {
  getUser,
  loadAdvertsSelector,
  loadTagsSelector,
} from "../../store/selectors";
import storage from "../../utils/storage";
import { defaultFilters, filterAdverts } from "../home/filters";

const getFilters = () => storage.get("filters") || defaultFilters;

const useFilter = () => {
  const [value, setValue] = React.useState({
    name: "",
    offerAdvert: "",
    price: [],
    tags: [],
    paymentMethod: [],
    photo: null,
    experience: [],
  });

  const [filters, setFilters] = React.useState([]);
  const [myuser, getmyuser] = React.useState("");

  const dispatch = useDispatch();

  const ads = useSelector(loadAdvertsSelector);
  const tags = useSelector(loadTagsSelector);
  const user = useSelector(getUser);

  const getFilters = () => storage.get("filters") || defaultFilters;
  const saveFilters = (filters) =>
    storage.set("filters", filters) || defaultFilters;

  useEffect(() => {
    saveFilters(filters);
    dispatch(loadAdverts());
    dispatch(loadTags());
    getmyuser(user);
  }, [dispatch, filters, user]);

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

  var adverts = filterAdverts(ads, value);
  
  return {
    value: adverts,
    handleSubmit,
    handleChange,
  };
};

export default useFilter;
