import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedSelector } from "../../store/selectors";

const PrivateRoute = ({isLogged}) => {
  return isLogged ? <Outlet /> : <Navigate replace to="/auth" />;
};

const mapStateToProps = (state) => ({
  isLogged: isLoggedSelector(state),
});

export default connect(mapStateToProps)(PrivateRoute);
