import { useState, useEffect, useRef } from "react";
import useFormUtils from "../../hooks/useFormUtils";
import { signUp } from "./apicalls";
import "./SignUpPage.css";

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
      console.log(userId);
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
    <form
      className="signup-form"
      // encType="multipart/form"
      onSubmit={handleSubmit}
    >
      <label>
        Nombre de usuario
        <input
          type="text"
          className="block"
          name="userName"
          value={formValue.userName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          className="block"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Contraseña
        <input
          type="password"
          className="block"
          name="password"
          value={formValue.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirmar contraseña
        <input
          type="password"
          className="block"
          name="passwordConfirm"
          ref={passwordConfirmRef}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="button" disabled={disabledButton}>
        Darme de alta
      </button>
    </form>
  ) : null;
}

export default SignUpPage;
