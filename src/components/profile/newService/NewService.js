import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormUtils from "../../hooks/useFormUtils";
import { createAdvert } from "../../../store/actions";
import { loadTags } from "../../../store/actions";
import { loadTagsSelector } from "../../../store/selectors";
import { useNavigate } from "react-router-dom";
import { getPaymentMethods } from "../../../apicalls";
import ButtonBack from "../../common/ButtonBack";

//TODO:
//Que sea posible crear un anuncio sin imagen

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

    dispatch(createAdvert(data, navigate));
  };

  const disabledButton =
    !advertData.name ||
    !advertData.description ||
    !advertData.price ||
    !advertData.paymentMethods ||
    !advertData.tags;

  const tags = useSelector(loadTagsSelector);

  return (
    <>
      <header className="p-3 flex mb-3">
        <ButtonBack />
        <h1 className="font-medium text-3xl text-center flex-auto">
          Crear anuncio
        </h1>
      </header>

      <div className="grid max-w-2xl mx-auto bg-slate-100 rounded-lg m-3 p-3">
        <form
          className="new-service-form"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-200"
            name="name"
            value={advertData.name}
            onChange={handleChange}
            placeholder="Nombre del servicio"
          />
          <div className="text-center my-5">
            <label className="mx-2">
              <input
                type="radio"
                name="offerAdvert"
                value="true"
                onChange={handleChange}
                checked={advertData.offerAdvert === true}
              />{" "}
              Ofrezco
            </label>
            <label className="mx-2">
              <input
                type="radio"
                name="offerAdvert"
                value=""
                onChange={handleChange}
                checked={advertData.offerAdvert === false}
              />{" "}
              Busco
            </label>
          </div>
          <textarea
            className="min-w-full max-w-full px-3 py-2 rounded-lg border border-gray-200 mb-3"
            name="description"
            value={advertData.description}
            onChange={handleChange}
            placeholder="Describe tu servicio..."
          />
          <input
            type="number"
            className="px-3 py-2 w-full rounded-lg border border-gray-200 mb-3"
            name="price"
            value={advertData.price}
            onChange={handleChange}
            placeholder="precio"
            min={0}
          />
          <label className="w-full text-center">
            <div className="text-xl mb-2">Forma de pago</div>
            <select
              type="select-multiple"
              multiple={true}
              value={advertData.paymentMethods}
              className="w-full rounded-lg border border-gray-200 mb-3 p-3"
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
          <label className="w-full text-center">
            <div className="text-xl mb-2">Categorías</div>
            <select
              type="select"
              // value={advertData.paymentMethods}
              className="w-full rounded-lg border border-gray-200 mb-3 p-3"
              name="tags"
              onChange={handleChange}
            >
              <option>- - Seleccionar - -</option>
              {tags.length
                ? tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))
                : null}
            </select>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 mb-3 p-3"
            name="experience"
            value={advertData.experience}
            onChange={handleChange}
            placeholder="Experiencia"
          />
          <label className="text-center">
            <div className="text-xl mb-2">
              Sube una imagen para ilustrar tu anuncio
            </div>
            <input
              type="file"
              name="advertImage"
              ref={imageRef}
              className="w-full rounded-lg border border-gray-200 mb-3 p-3"
            />
          </label>
          <button
            type="submit"
            className="flex p-3 bg-orange-500 hover:bg-orange-400 transition-all ease-in-out delay-100' text-white justify-center content-center items-center rounded-lg mt-3 w-full cursor-pointer"
            disabled={disabledButton}
          >
            Crear anuncio
          </button>
        </form>
      </div>
    </>
  );
}

export default NewService;
