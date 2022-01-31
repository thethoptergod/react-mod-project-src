import { useContext } from "react";
import { Context } from "../data/Context"
const Name = () => {
    const info = useContext(Context);
    return(
        <div>
            <label>Name: </label>
            <input onChange={e => info.setName(e.target.value)} />
        </div>
    )
}
export default Name;