import { useContext } from "react";
import { Context } from "../data/Context"
const Email = () => {
    const info = useContext(Context);
    return(
        <div>
            <label>Email: </label>
            <input onChange={e => info.setEmail(e.target.value)} />
        </div>
    )
}
export default Email;