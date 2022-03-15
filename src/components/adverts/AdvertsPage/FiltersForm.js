import useForm from "../../../hooks/useForm";
import { saleFilter } from "./filters";

function FilterForm(){
  /*  ç
function FilterForm({initialFilters, defaultFilters, onFilter}){
  const {
    formValue: filters,
    setFormValue,
    handleChange,
    handleSubmit,
  } = useForm(initialFilters);

  
  const handleResetClick = () => {
    setFormValue(defaultFilters);
    onFilter(defaultFilters);
  };

  
  const { name, sale, price, tags } = filters;
*/


    return (
        <form >
            <p>¿Quieres buscar algo específico?</p>
            <label>El nombre del servicio<input name="name" type="text"></input></label>
            <br></br>
            {}
            <input type="radio"></input>
        </form>
    )
}

export default FilterForm