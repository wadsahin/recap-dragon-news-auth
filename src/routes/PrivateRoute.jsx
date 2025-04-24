/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/loading/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(pathname);
    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} replace to="/auth/login"></Navigate>
    );
};

export default PrivateRoute;