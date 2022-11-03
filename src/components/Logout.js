import { Context } from "./Context/Context";
import {useContext} from "react";
import {useNavigate} from "react-router-dom"

function Logout(){
    const navigate = useNavigate()
    const [context, setContext] = useContext(Context)
    localStorage.removeItem('token')
    setContext('')
    navigate("/")
    return null
}

export default Logout