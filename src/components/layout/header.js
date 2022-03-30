import Button from "../common/button";
import Logo from "../common/logo";
import MainButton from "../common/main_button";
import { useState, useEffect } from "react";
import SearchBar from "../common/searchbar";
import FullLogo from "../common/full_logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BiUser,
  BiMessageAltDetail,
  BiPowerOff,
  BiLogIn,
} from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { isLoggedSelector } from "../../store/selectors";
import { useDispatch, connect } from "react-redux";
import { logout } from '../auth/service';
import { authLogout } from '../../store/actions';

function Header({ ads, value, change, myuser, isLogged }) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleLogout = async () => {
    await logout().then(() => {
      console.log('Logout OK');
      dispatch(authLogout())
    });
  };

  const isMobile = width <= 768;

  return (
    <nav className="shadow-xl grid grid-cols-6 gap-3 p-3 bg-white">
      <div className="col-span-1">{isMobile ? <Logo /> : <FullLogo />}</div>
      <SearchBar
        value={value.name}
        change={change}
        className="w-full col-span-5 xl:col-span-4 border border-slate-100 rounded-full px-3"
      />
      <div className="col-span-full xl:col-span-1 flex xl:justify-between">
        {isLogged ? (
          <Link
            to="/servicios/crear"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center flex-auto"
          >
            <IoMdAdd className="text-xl" /> Crear
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center flex-auto"
          >
            <BiLogIn className="text-xl" /> Acceder
          </Link>
        )}
        {isLogged ? (
          <div className="text-2xl flex justify-end xl:flex-">
            <Link
              to="/perfil/servicios"
              className="flex content-center items-center ml-3"
            >
              <Button textbutton={<BiUser />} />
            </Link>
            <Link
              to={`/perfil/mychats`}
              className="flex content-center items-center ml-3"
            >
              <BiMessageAltDetail />
            </Link>
            <button className="ml-3 items-center">
              <BiPowerOff onClick={handleLogout} />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isLogged: isLoggedSelector(state),
});

export default connect(mapStateToProps)(Header);
