import { useDispatch } from "react-redux";
import { loadAdverts } from "store/actions";

function Home() {
  const dispatch = useDispatch();
  const adverts = dispatch(loadAdverts);
  

  /* <Services/>  listado de anuncios 
{/* <Search/>    apartado de búsquedas */
}

export default Home;
