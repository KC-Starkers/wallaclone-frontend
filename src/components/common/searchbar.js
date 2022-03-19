import { useState } from "react";
import storage from "../../utils/storage";
import { filterAdverts } from "../home/filters";

const getFilters = () => storage.get('filters');
function SearchBar({ads}){
    
    const [value, setValue] = useState ({name: '', sale: '', price: '', tags: [], photo: null})
    const [filters, setFilters] = useState(getFilters);
    const filteredAdverts = filterAdverts(ads, value.name);
   /*
    console.log(filteredAdverts)

    console.log(ads)
    console.log(value.name)
    console.log(filters)
    */
    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
       // console.log(value)
      };

     // const [formValue, setFormValue] = useState(initialFormValue);
      const handleSubmit = onSubmit => ev => {
        ev.preventDefault();
        onSubmit(setFilters);
      };

    return(
        <div className="flex items-center justify-center ">
            <div className="flex border-2 border-gray-200 rounded">
                <form onSubmit={handleSubmit}>
                <input type="text" className="text-slate-900" placeholder="Search..." name="name" value={value.name} onChange={handleChange} ></input>
                <button className="text-white bg-gray-600 border-l ">
                    Search
                </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;