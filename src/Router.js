import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import { Details } from "./components/services";
import { MyServices } from "./components/profile";
import NewService from "./components/profile/newService";
import { Login, SignUpPage } from "./components/auth";
import PrivateOutlet from "./components/auth/PrivateOutlet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" />} />
        {/*  <Route element={<Layout/>}>  */}
        <Route path="/auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="registro" element={<SignUpPage />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/*      </Route>

       {/*  <Route element={<Layout/>}>   */}{" "}
        {/* Layout: Header y Footer común a todas las páginas, no usa la prop 'path' */}
        <Route path="/servicios">
          <Route index element={<Home />} />{" "}
          {/*  Home: contiene a Services (listado de anuncios) y Search (filtros) */}

          <Route path="crear" /* element={<PrivateOutlet />} */>
            <Route index element={<NewService/>} />        
          </Route>
          
          <Route path=":idServicio" element={<Details />} />
        </Route>
        {/*  </Route> */}
        {/*  <Route element={<Layout/>}>  */}
        <Route path="/perfil" element={<PrivateOutlet />}>
          <Route index element={"Mí perfil"} />
          <Route path="servicios" element={<MyServices />} />
          <Route path="favoritos" element={"Favoritos"} />
          <Route path="acordados" element={"Servicios acordados"} />
          <Route path=":idUsuario" element={"Perfil de otro usuario"} />
          <Route
            path=":idUsuario/servicios"
            element={"Servicios de otro usuario"}
          />
        </Route>
        {/*    </Route> */}
        <Route path="/mensajes" element={<PrivateOutlet />}>
          <Route index element={"Chat index"} />
          <Route path=":idChat" element={"Conversación"} />
        </Route>
        <Route path="*" element={"404 not found"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
