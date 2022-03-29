import Button from "../common/button"
import Logo from "../common/logo"
import MainButton from "../common/main_button"
import { useState, useEffect } from "react"
import SearchBar from "../common/searchbar"
import FullLogo from "../common/full_logo"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Header ({ads, value, change, myuser}) {
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <nav className="shadow-xl grid grid-cols-6 gap-4">
            {
                isMobile ? <Logo /> : <FullLogo />
            }
            <SearchBar value={value.name} change={change}/>
            <MainButton textbutton={'+ Agregar oferta'} />
            <Button textbutton={'Mi área'}/>
            <Link to={`/perfil/mychats`}><Button textbutton={'Mensajes'} /></Link>
            <Button textbutton={'Salir'} />
        </nav>
    )
}

export default Header