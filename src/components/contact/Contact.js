import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [messaje, setMessaje] = useState("");

  const advert = searchParams.get("advert");
  const fromId = searchParams.get("from");
  const toId = searchParams.get("to");

  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState([]);

  useEffect(() => {
    const getUserData = async (userId) => {
      const accessToken = localStorage.getItem("token");

      const connection = axios.create({
        baseURL: `${process.env.REACT_APP_API_BASE_URL}/auth/get-user/`,
      });
      try {
        const getData = await connection.get(userId, {
          headers: {
            Authorization: accessToken,
          },
        });
        const response = getData.data;
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    getUserData(fromId).then(res => setFromData(res));
    getUserData(toId).then(res => setToData(res));


  }, [fromId, toId]);


  const formData = {
    subject: `Starkers - Contacto sobre: ${advert}`,
    from_name: fromData.userName,
    to_name: toData.userName,
    reply_to: toData.email,
    reply_url: `${process.env.PUBLIC_URL}/contacto?advert=${advert}&from=${toId}&to=${fromId}`,
  };

  const handleChange = (e) => {
    setMessaje(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzzom07",
        "template_cyqumta",
        e.target,
        "I4V6HW0gfPWbHgrrZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje Enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <div className="w-full max-w-3xl ">
        <h1 className="font-medium text-3xl mb-3 text-center">
          Contacta sobre {advert}
        </h1>
        <form onSubmit={sendEmail} className="bg-slate-200 p-3 rounded-lg">
          <input
            type="hidden"
            value={formData.subject}
            name="subject"
            required
          />
          <input
            type="hidden"
            value={formData.reply_to}
            name="reply_to"
            required
          />
          <input
            type="hidden"
            value={formData.from_name}
            name="from_name"
            required
          />
          <input
            type="hidden"
            value={formData.to_name}
            name="to_name"
            required
          />
          <input
            type="hidden"
            value={formData.reply_url}
            name="reply_url"
            required
          />
          <textarea
            placeholder="Escribe tu mensaje"
            name="message"
            onChange={handleChange}
            className=" w-full rounded-lg px-3 py-2 h-52"
          />
          <input
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 p-3 w-full rounded-lg font-medium cursor-pointer"
          />
        </form>
        <div className="text-center mt-3">
          <Link to="/">Volver a la home</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
