import { useContext } from "react";
import { Context } from "../data/Context"
const Info = () => {
    const info = useContext(Context);
    return(
        <div>
            <label>What You Want to Say: </label>
            <input onChange={e => info.setInfo(e.target.value)} />
        </div>
    )
}
export default Info;