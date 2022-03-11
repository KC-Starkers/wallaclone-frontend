import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" />} />

        <Route path="/servicios">
          <Route index element={<App />} />
          {/* TODO Esta ruta debe se privada */}
          <Route path="crear" element={"Crear servicio"} />
          <Route path=":idServicio" element={"Servicio"} />
        </Route>

        <Route path="/auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={"Acceso de usuario"} />
          <Route path="registro" element={"Registro de usuario"} />
        </Route>

        {/* TODO Estas rutas deben ser privadas */}
        <Route path="/perfil">
          <Route index element={"Mí perfil"} />
          <Route path="servicios" element={"Mis Servicios"} />
          <Route path="favoritos" element={"Favoritos"} />
          <Route path="acordados" element={"Servicios acordados"} />
          <Route path=":idUsuario" element={"Perfil de otro usuario"} />
          <Route
            path=":idUsuario/servicios"
            element={"Servicios de otro usuario"}
          />
        </Route>
        
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
