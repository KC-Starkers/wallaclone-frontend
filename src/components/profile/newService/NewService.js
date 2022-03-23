import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import { createAdvert } from "../../../store/actions";
import { loadTags } from "../../../store/actions";
import "./newService.css"

//TODO: el input radio no funciona 
//TODO: paymentMethods no pilla mas de un valor: arreglar
//TODO: cambiar el type de tags a select
//TODO: implementar las llamadas a api de tags predefinidos (bajar master del back primero o subirlo al servidor) y paymentMethods
//TODO: cambiar hardcoded values por lista dinámica con llamada al api de tags y paymentMethods
//TODO: El componente padre solo renderizará NewService si el estado auth = true
//TODO: crear un apicall para el paymentMethods - lo hará Bea
//TODO: hacer algo con createdBy
//TODO: subir a repo y servidor y comprobar que el componente funciona arriba

//TODO: dejar la subida de imagen para el final: handleSubmit con un new FormData/función FormData para los datos normales y un append para el file

function NewService() {
  const {
    formData: advertData,
    setFormData,
    handleChange,

  } = useForm({
    name: "",
    offerAdvert: true,
    description: "",
    price: "",
    paymentMethods: [""],
    tags: [],
    experience: "",
    advertImage: "",
  });

  const [tags, setTags] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(createAdvert(advertData));
  };


  const disabledButton =
    !advertData.name ||
    !advertData.offerAdvert ||
    !advertData.description ||
    !advertData.price ||
    !advertData.paymentMethods ||
    !advertData.tags;
  // || !advertData.experience

  // console.log('los tags', tags);

  console.log('advertData', advertData)

  return (
    <form className="new-advert-form" encType="multipart/form" onSubmit={handleSubmit}>
      <label>
        Nombre del servicio
        <input
          type="text"
          className="block"
          name="name"
          value={advertData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Ofrezco
        <input
          type="radio"
          name="offerAdvert"
          value={advertData.offerAdvert}
          onChange={handleChange}
          checked={advertData.offerAdvert===true}
        />
      </label>
      <label>
        Busco
        <input
          type="radio"
          name="offerAdvert"
          value={!advertData.offerAdvert}
          onChange={handleChange}
          checked={advertData.offerAdvert===false}
        />
      </label>
   
      Describe tu servicio...
      <textarea
        className="block textarea"
        name="description"
        value={advertData.description}
        onChange={handleChange}
      ></textarea>
      <label>
        Precio
        <input
          type="number"
          className="block"
          name="price"
          value={advertData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Forma de pago
        <select
          multiple={true}
          // value={advertData.paymentMethods}
          // value={[""]}
          className="block"
          name="paymentMethods"
          onChange={handleChange}
        >
          {/* TODO: cambiar por lista de options dinámica con llamada al api de paymentMethods */}
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
          // value={advertData.tags}
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
          name="experience"
          value={advertData.experience}
          onChange={handleChange}
        />
      </label>
      <label>
        Sube una imagen para ilustrar tu anuncio
        <input
          type="file"
          // className="block"
          name="advertImage"
          value={advertData.advertImage}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit" className="button block" disabled={disabledButton}>Crear anuncio</button>
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
