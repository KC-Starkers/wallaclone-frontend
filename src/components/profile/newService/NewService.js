import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormUtils from "../../hooks/useFormUtils";
import { createAdvert } from "../../../store/actions";
import { loadTags } from "../../../store/actions";
import { loadTagsSelector } from "../../../store/selectors";
import "./newService.css";

//TODO: Que el formulario funcione:
// - el select de las tags no está bien construido, peta el renderizado tras crear el anuncio
// - llamada al api de los paymentMethods (hay que picar el back también)

//TODO: pintar el createdBy con el GET /me
//TODO: subir a repo y servidor y comprobar que el componente funciona arriba
//TODO: hacer la redirección a Home en la action createAdvert

//TODO: dejar la subida de imagen para el final: handleSubmit con un new FormData/función FormData para los datos normales y un append para el file

function NewService() {
  const { formData: advertData, handleChange } = useFormUtils({
    name: "",
    offerAdvert: true,
    description: "",
    price: "",
    paymentMethods: [],
    tags: [],
    experience: "",
    // advertImage: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, []);

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
  console.log("los tags", tags);

  console.log("advertData", advertData);

  return (
    <form
      className="new-advert-form"
      encType="multipart/form" //TODO: prueba quitando esto
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
          // type="select-multiple"
          multiple={true}
          value={advertData.paymentMethods} //solo pilla un valor
          // value={[""]}
          className="block"
          name="paymentMethods"
          onChange={handleChange}
        >
          TODO: cambiar por lista de options dinámica con llamada al api de
          paymentMethods
          <option value="cash">Efectivo</option>
          <option value="debit">Tarjeta de débito</option>
          <option value="credit">Tarjeta de crédito</option>
        </select>
      </label>
      <label>
        Categorías
        <select
          /*  multiple={true} */
          type="select"
          value={advertData.paymentMethods}
          className="block"
          name="tags"
          onChange={handleChange}
        >
          {/* <option>- - Seleccionar - -</option> TODO: volver a poner una vez resuelto lío de los tags tras el POST*/}

          {/* {
            (tagsOptions = tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            )))
          } */}

          {/* <option value="informatica">Informática</option>
          <option value="clases">Clases</option>
          <option value="hogar">Hogar</option> */}

          {tags.length
            ? tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))
            : null}

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
