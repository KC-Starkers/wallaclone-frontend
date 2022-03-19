import useForm from "../../../hooks/useForm";

//TODO: incluir acciones de redux 'ui'
//TODO: ¿usar type number para numeros o vale con text?
//TODO: ¿usar el estado auth para saber si está autenticado?
//TODO: ¿recibe el id del user (como prop)?

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
    paymentMethod: [],
    // tags: [],
    // experience: "",
    // advertImgage: "",
    // createdBy: "",
  });

  return (
    <form encType="multipart/form" onSubmit={handleSubmit}>
      <label>
        Nombre del servicio
        <input
          type="text"
          className="block"
          name="name"
          value={ServiceData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Ofrezco
        <input
          type="radio"
          className="block"
          name="offerAdvert"
          //   value={ServiceData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Busco
        <input
          type="radio"
          className="block"
          name="offerAdvert"
          //   value={ServiceData.name}
          onChange={handleChange}
        />
      </label>
      Describe el servicio que {serviceData.offerAdvert ? "ofreces" : "buscas"}
      <textarea
        className="block textarea"
        name="description"
        value={userData.description}
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
          type="select"
          className="block"
          name="paymentMethod"
          value={serviceData.paymentMethod}
          onChange={handleChange}
        >
          <option value="cash">Efectivo</option>
          <option value="debit">Tarjeta de débito</option>
          <option value="credit">Tarjeta de crédito</option>
        </select>
      </label>
    </form>
  );
}

export default NewService;
