import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

const ProtectedRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    if (loading) {
        // console.log(loading);
        return <div className="w-full flex justify-center">
            <span className="loading loading-infinity w-24"></span>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoutes;