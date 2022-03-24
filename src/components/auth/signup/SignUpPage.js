import { useState, useEffect, useRef } from "react";
import useFormUtils from "../../hooks/useFormUtils";
import { signUp } from "./apicalls";
import "./SignUpPage.css";


//TODO: crear una acción de SignUp para que pinte los errores de validación que arroja el back y el isLoading

//TODO: gestionar en front los errores del endpoint (ej: username e email deben ser únicos)

function SignUpPage() {
  const {
    formData: userData,
    /*  setFormData, */
    handleChange,
    
  } = useFormUtils({
    userName: "",
    // name: "",
    email: "",
    password: "",

  });

  const [crossValid, setCrossValid] = useState(false);
  const imageRef = useRef(null);
  const passwordConfirmRef = useRef("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const result = await signUp(userData);
      const userId = result._id;
      // console.log(userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const crossValidation = () => {
      if (userData.password === passwordConfirmRef.current.value) {
        setCrossValid(true);
      } else {
        setCrossValid(false);
      }
    };
    crossValidation();
  }, [userData.password, passwordConfirmRef.current.value]);

  const disabledButton =
    !userData.userName ||
    // !userData.name ||
    !userData.email ||
    !userData.password ||
    !userData.passwordConfirm ||
    !crossValid 


  return (
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
          value={userData.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        Nombre
        <input
          type="text"
          className="block"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          className="block"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Contraseña
        <input
          type="password"
          className="block"
          name="password"
          value={userData.password}
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
   
{/*     
      Cuéntanos algo de tí...
      <textarea
        className="block textarea"
        name="description"
        value={userData.description}
        onChange={handleChange}
      ></textarea>
      <label>
        Sube tu foto o una imagen que te identifique
        <input type="file" name="image" ref={imageRef} />
      </label> */}

      <button type="submit" className="button" disabled={disabledButton}>
        Darme de alta
      </button>
    </form>
  );
}

export default SignUpPage;
