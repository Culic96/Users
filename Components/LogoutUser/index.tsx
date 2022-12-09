import {useAuth} from "../../Hooks/useAuth"
import  PrimaryBtn from "../Shared/PrimaryBtn";
import { Holder } from "./style";
const LogoutUser = () => {
const {auth, logoutUser} = useAuth();
    return (
        <>
        <Holder>
        <h3>Welcome back, {auth?.email}</h3>
        <PrimaryBtn onClick={() => logoutUser()}>Logout</PrimaryBtn>
        </Holder>
        </>
    )
}


export default LogoutUser;