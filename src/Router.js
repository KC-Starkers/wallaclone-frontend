import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import { Details } from "./components/services";
import { MyServices } from "./components/profile";
import NewService from "./components/profile/newService";
import { Login, SignUpPage } from "./components/auth";
import PrivateOutlet from "./components/auth/PrivateOutlet";
import Chat from "./components/chat/Chat";
import LayoutOutlet from "./components/LayoutOutlet";
import MyChats from "./components/chat/myChats";
import Contact from "./components/contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" />} />
        <Route path="/auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="registro" element={<SignUpPage />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<LayoutOutlet />}>
          {/* Layout: Header y Footer común a todas las páginas, no usa la prop 'path' */}
          <Route path="/servicios">
            <Route index element={<Home />} />
            {/*  Home: contiene a Services (listado de anuncios) y Search (filtros) */}

            <Route path="crear" element={<PrivateOutlet />}>
              <Route index element={<NewService />} />
            </Route>

            <Route path=":idServicio" element={<Details />} />
          </Route>
        </Route>
        <Route element={<LayoutOutlet />}>
          <Route path="/perfil" element={<PrivateOutlet />}>
            <Route index element={"Mí perfil"} />
            <Route path="servicios" element={<MyServices />} />
            <Route path="favoritos" element={"Favoritos"} />
            <Route path="acordados" element={"Servicios acordados"} />
            <Route path="mychats" element={<MyChats/>} />
            <Route path=":idUsuario" element={<MyServices />} />
            <Route
              path=":idUsuario/servicios"
              element={"Servicios de otro usuario"}
            />
          </Route>
        </Route>
        {/*    </Route> */}
        <Route path="/contacto" element={<PrivateOutlet />}>
          <Route index element={<Contact/>} />
        </Route>
        <Route path="/chat" element={<PrivateOutlet />}>
          <Route index element={<p>"Chat index"</p>} />
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="*" element={"404 not found"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;