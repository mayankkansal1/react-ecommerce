import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Protected({ children }) {
    const user = useSelector(selectLoggedInUser)
    if (!user) {
        return <Navigate to="/Login" replace={true}></Navigate>
    }
    return children;
}

export default Protected;