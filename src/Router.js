import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import { Details } from "./components/services";
import { MyServices } from "./components/profile";
import { Login } from "./components/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" />} />

       {/*  <Route element={<Layout/>}>   */}      {/* Layout: Header y Footer común a todas las páginas, no usa la prop 'path' */}
        <Route path="/servicios">
          <Route index element={<Home />} />       {/*  Home: contiene a Services (listado de anuncios) y Search (filtros) */}
          {/* TODO Esta ruta debe se privada */}
          <Route path="crear" element={"Crear servicio"} />
          <Route path=":idServicio" element={<Details/>} />
        </Route>
       {/*  </Route> */}

        {/* TODO Si está logueado redirigir a la Home */}
       {/*  <Route element={<Layout/>}>  */}
        <Route path="/auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={"Registro de usuario"} />
        </Route>
   {/*      </Route>
 */}
       {/*  <Route element={<Layout/>}>  */}
        {/* TODO Estas rutas deben ser privadas */}
        <Route path="/perfil">
          <Route index element={"Mí perfil"} />
          <Route path="servicios" element={<MyServices/>} />
          <Route path="favoritos" element={"Favoritos"} />
          <Route path="acordados" element={"Servicios acordados"} />
          <Route path=":idUsuario" element={"Perfil de otro usuario"} />
          <Route
            path=":idUsuario/servicios"
            element={"Servicios de otro usuario"}
          />
        </Route>
     {/*    </Route> */}


        {/* TODO Estas rutas deben ser privadas */}
        <Route path="/mensajes">
          <Route index element={"Chat index"} />
          <Route path=":idChat" element={"Conversación"}/>
        </Route>

        <Route path="*" element={"404 not found"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
