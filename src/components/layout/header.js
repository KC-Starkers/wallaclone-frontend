import Button from "../common/button"
import Logo from "../common/logo"
import MainButton from "../common/main_button"
import { useState, useEffect } from "react"
import SearchBar from "../common/searchbar"
import FullLogo from "../common/full_logo"

function Header ({ads, value, change}) {
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
            <Button textbutton={'Mensajes'} />
            <Button textbutton={'Salir'} />
        </nav>
    )
}

export default Header