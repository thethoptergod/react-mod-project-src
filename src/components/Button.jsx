import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../data/Context"
const Button = (props) => {
    const info = useContext(Context);
    const [visible, setVisible] = useState(false);
    function submit(){
        axios({
            method: "PUT",
            url: `https://getpantry.cloud/apiv1/pantry/${props.pantryID}/basket/${props.basket}`,
            data: {
                "name": `${info.name}`,
                "email": `${info.email}`,
                "info": `${info.info}`
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
        setVisible(!visible);
    }
    return(
        <div>
            <button onClick={submit}>Submit</button>
            <h4 style={{display: visible ? "block" : "none"}}>Thank You For Contacting Me!</h4>
        </div>
    )
}
export default Button;