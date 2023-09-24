import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../user/userSlice";
function Protected({ children }) {
    const user = useSelector(selectUserInfo)
    if (!user) {
        return <Navigate to="/Login" replace={true}></Navigate>
    }
    return children;
}

export default Protected;