import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormUtils from "../../hooks/useFormUtils";
import { createAdvert } from "../../../store/actions";
import { loadTags } from "../../../store/actions";
import { loadTagsSelector } from "../../../store/selectors";
import { useNavigate } from "react-router-dom";
import "./newService.css";
import { getPaymentMethods } from "../../../apicalls";

//TODO:
//Hacer llamada al api en la action
//Que permita crear el anuncio sin la imagen

function NewService() {
  const imageRef = useRef(null);
  const [predefinedPaymentMethods, setPredefinedPaymentMethods] = useState([]);
  const { formValue: advertData, handleChange } = useFormUtils({
    name: "",
    offerAdvert: true,
    description: "",
    price: "",
    paymentMethods: [],
    tags: [],
    experience: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadTags());
    getPaymentMethods()
      .then((res) => setPredefinedPaymentMethods(res.result))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const data = new FormData();
    for (let key in advertData) {
      if (key === "paymentMethods") {
        advertData.paymentMethods.forEach((item) =>
          data.append("paymentMethods[]", item)
        );
      } else {
        data.append(key, advertData[key]);
      }
    }
    data.set("advertImage", imageRef.current.files[0]);

    // console.log(imageRef.current.value);
    // for (const pair of data.entries()) {
    //   console.log(pair);
    // }

    dispatch(createAdvert(data, navigate));
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
  console.log("methods", predefinedPaymentMethods);

  return (
    <form
      className="new-service-form"
      encType="multipart/form-data"
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
          type="select-multiple"
          multiple={true}
          value={advertData.paymentMethods}
          // value={[""]}
          className="block"
          name="paymentMethods"
          onChange={handleChange}
        >

          {predefinedPaymentMethods.length
            ? predefinedPaymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))
            : null}

         {/* <option value="cash">Efectivo</option>
          <option value="debit">Tarjeta de débito</option>
          <option value="credit">Tarjeta de crédito</option>
          <option value="paypal">Paypal</option> */}
        </select>
      </label>


      <label>
        Categorías
        <select
          type="select"
          // value={advertData.paymentMethods}
          className="block"
          name="tags"
          onChange={handleChange}
        >
          {/* <option>- - Seleccionar - -</option> */}

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
        <input type="file" name="advertImage" ref={imageRef} />
      </label>
      <button type="submit" className="button block" disabled={disabledButton}>
        Crear anuncio
      </button>
    </form>
  );
}

export default NewService;
