// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import { createAdvert } from "../../../store/actions";


//TODO: El componente padre solo renderizará NewService si el estado auth = true
//TODO: ¿recibe el id del user (como prop) para que cree el campo createdBy somehow?
//TODO: cambiar hardcoded values por lista dinámica con llamada al api de tags
//TODO: crear un apicall para el paymentMethod

//TODO: dejar la subida de imagen para el final: handleSubmit con un new FormData/función FormData para los datos normales y un append para el file

function NewService() {
  const {
    formData: serviceData,
    setFormData,
    handleChange,
  } = useForm({
    name: "",
    offerAdvert: "",
    description: "",
    price: "",
    paymentMethod: [""],
    tags: [],
    experience: "",
    advertImage: "",
    // createdBy: "",   //TODO: research: que se cree automáticamente al crear el anuncio si el estado global tiene el id del user 
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTags());
  // }, [dispatch]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(createAdvert(serviceData));
  };

  const disabledButton =
    !serviceData.name ||
    !serviceData.offerAdvert ||
    !serviceData.description ||
    !serviceData.price ||
    !serviceData.paymentMethod ||
    !serviceData.tags 
  // || !serviceData.experience

  return (
    <form encType="multipart/form" /* onSubmit={handleSubmit} */>
      <label>
        Nombre del servicio
        <input
          type="text"
          className="block"
          name="name"
          value={serviceData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Ofrezco
        <input
          type="radio"
          className="block"
          name="offerAdvert"
          //   value={serviceData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Busco
        <input
          type="radio"
          className="block"
          name="offerAdvert"
          //   value={serviceData.name}
          onChange={handleChange}
        />
      </label>
      Describe el servicio que {serviceData.offerAdvert ? "ofreces" : "buscas"}
      <textarea
        className="block textarea"
        name="description"
        value={serviceData.description}
        onChange={handleChange}
      ></textarea>
      <label>
        Precio
        <input
          type="number"
          className="block"
          name="price"
          value={serviceData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Forma de pago
        <select
          multiple={true}
          // value={serviceData.paymentMethod}
          // value={[""]}
          className="block"
          name="paymentMethod"
          onChange={handleChange}
        >
          {/* TODO: cambiar por lista de options dinámica con llamada al api de paymentMethod */}
          <option key="1" value="cash">
            Efectivo
          </option>
          <option key="2" value="debit">
            Tarjeta de débito
          </option>
          <option key="3" value="credit">
            Tarjeta de crédito
          </option>
        </select>
      </label>
      <label>
        Categorías
        <select
          multiple={true}
          // value={serviceData.tags}
          className="block"
          name="tags"
          onChange={handleChange}
        >
          {/* TODO: cambiar por lista de options dinámica con llamada al api de tags */}
          <option key="1" value="Servicios del Hogar">
            Servicios del Hogar
          </option>
          <option key="2" value="Clases">
            Clases
          </option>
          <option key="3" value="Diseño y marketing">
            Diseño y marketing
          </option>
          <option key="4" value="Informática y otros">
            Informática y otros
          </option>
        </select>
      </label>
      <label>
        Experiencia
        <input
          type="text"
          className="block"
          name="experiencia"
          value={serviceData.experience}
          onChange={handleChange}
        />
      </label>
      <label>
        Sube una imagen para ilustrar tu anuncio
        <input
          type="file"
          className="block"
          name="advertImage"
          value={serviceData.advertImage}
          onChange={handleChange}
        />
      </label>
      <button type="submit" /* className="button" */>Crear anuncio</button>
    </form>
  );
}

{
  /* <select
className="new-advert-form-field"
name="tags"
value={fields.tags}
onChange={handleOnChange}
multiple={true}
>
{tagvalues.map((tagvalue, index) => (
  <option key={index} value={tagvalue}>
    {" "}
    {tagvalue}{" "}
  </option>
))}
</select> */
}

// const [tagvalues, setTagValues] = useState([]);

export default NewService;
