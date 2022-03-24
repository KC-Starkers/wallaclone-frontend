import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { createAdvert } from "../../../store/actions";
import { loadTags } from "../../../store/actions";
import { loadTagsSelector } from "../../../store/selectors";
import "./newService.css";

//TODO: Que el formulario funcione:
// - el select de las tags no está bien construido
// - el paymentMethod no está bien construido y meter llamada al api
// - select (multiple=true): paymentMethods no pilla mas de un valor: arreglar

//TODO: implementar llamada a api de paymentMethods (preguntar a Bea si ya lo hizo)


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
    paymentMethods: "",
    tags: "",
    experience: "",
    // advertImage: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, [/* dispatch */]);  

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(createAdvert(advertData));
  };

  const disabledButton =
    !advertData.name ||
    !advertData.description ||
    !advertData.price ||
    !advertData.paymentMethods ||
    !advertData.tags;


  const tags = useSelector(loadTagsSelector);


  console.log("advertData", advertData);

  return (
    <form
      className="new-advert-form"
      encType="multipart/form"  //TODO: prueba quitando esto
      onSubmit={handleSubmit}
    >
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
          value="true"
          onChange={handleChange}
          checked={advertData.offerAdvert === true}
        />
      </label>
      <label>
        Busco
        <input
          type="radio"
          name="offerAdvert"
          value=""
          onChange={handleChange}
          checked={advertData.offerAdvert === false}
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
          // multiple={true}
          // value={advertData.paymentMethods}
          // value={[""]}
          className="block"
          name="paymentMethods"
          onChange={handleChange}
        >
          TODO: cambiar por lista de options dinámica con llamada al api de paymentMethods 
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
         /*  multiple={true} */
          value={advertData.tags}
          className="block"
          name="tags"
          onChange={handleChange}
        >
          <option>- - Seleccionar - -</option>
          {tags.map((tag, index) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
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
      <button type="submit" className="button block" disabled={disabledButton}>
        Crear anuncio
      </button>
    </form>
  );
}

{
  /* <div>
        ¿Que quieres hacer en Wallaclone?
        <label>
          <span className="block">Ofrecer un servicio</span>
          <input
            type="radio"
            className="block"
            name="offer"
            value="foo"
            checked={userData.offer === true}
            onChange={(ev) =>
              setFormValue((currentState) => ({
                ...currentState,
                [ev.target.name]: Boolean(ev.target.value),
              }))
            }
          />
        </label>
        <label>
          Buscar un servicio
          <input
            type="radio"
            className="block"
            name="offer"
            value=""
            // checked={userData.offer === false}
            onChange={(ev) =>
              setFormValue((currentState) => ({
                ...currentState,
                [ev.target.name]: Boolean(ev.target.value),
              }))
            }
          />
        </label>
      </div> */
}



export default NewService;
