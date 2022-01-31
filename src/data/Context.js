import { createContext, useState } from "react";
export const Context = createContext();
export const FormContext = ({ children }) => {
    const [name, setName] = useState(null);
    const [info, setInfo] = useState(null);
    const [email, setEmail] = useState(null);
    return (
        <Context.Provider value={{name, info, email, setName, setInfo, setEmail}}>{children}</Context.Provider>
    );
};