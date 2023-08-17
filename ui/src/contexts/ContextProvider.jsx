import { useContext } from "react";
import { useState, createContext } from "react";

const StateContext = createContext({
    setUser:()=>{},
    token: null,
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(null);

    const setToken = () => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            token,
            user,
            setUser,
            setToken,
        }}>
            { children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);