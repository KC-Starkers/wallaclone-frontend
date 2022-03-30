import { useState, useEffect, useRef } from "react";
import useFormUtils from "../../hooks/useFormUtils";
import { signUp } from "./apicalls";

//TODO: crear una acción de SignUp para que pinte los errores de validación que arroja el back y el isLoading

//TODO: gestionar en front los errores del endpoint (ej: username e email deben ser únicos)

function SignUpPage() {
  const {
    formValue,
    /*  setFormData, */
    handleChange,
  } = useFormUtils({
    userName: "",
    email: "",
    password: "",
  });

  const [crossValid, setCrossValid] = useState(false);
  const imageRef = useRef(null);
  const passwordConfirmRef = useRef("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const result = await signUp(formValue);
      const userId = result._id;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const crossValidation = () => {
      if (formValue.password === passwordConfirmRef.current.value) {
        setCrossValid(true);
      } else {
        setCrossValid(false);
      }
    };
    crossValidation();
  }, [formValue.password, passwordConfirmRef.current.value]);

  const disabledButton =
    !formValue.userName ||
    !formValue.email ||
    !formValue.password ||
    !formValue.passwordConfirm ||
    !crossValid;

  return Object.entries(formValue).length ? (
    <div className="grid max-w-2xl mx-auto bg-slate-100 rounded-lg m-3 p-3">
      <form
        className=""
        // encType="multipart/form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 mb-3"
          name="userName"
          value={formValue.userName}
          onChange={handleChange}
          placeholder="Nombre de usuario"
        />

        <input
          type="email"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 mb-3"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 mb-3"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <input
          type="password"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 mb-3"
          name="passwordConfirm"
          ref={passwordConfirmRef}
          onChange={handleChange}
          placeholder="Confirmar contraseña"
        />

        <button
          type="submit"
          className="flex p-3 bg-orange-500 hover:bg-orange-400 transition-all ease-in-out delay-100' text-white justify-center content-center items-center rounded-lg mt-3 w-full cursor-pointer"
          disabled={disabledButton}
        >
          Darme de alta
        </button>
      </form>
    </div>
  ) : null;
}

export default SignUpPage;
