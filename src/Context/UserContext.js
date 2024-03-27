import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'


export const UserContext = createContext(); 


function UserProvider  ({children}) 
{
    const [logado, setLogado] = useState(false)

    async function Login( email, senha)
    {
        if( email == "caua123@live.com" && senha == "123")
        {
            await AsyncStorage.setItem("usuario", "Caua")
            setLogado( true );
        }
    }

    const[ usuario, setUsuario] = useState(null);

    async function infoUsuario()
    {
        const usuario = await AsyncStorage.getItem("usuario")
        setUsuario(usuario);
        setLogado(true)
    }
    useEffect(()=>{
        infoUsuario()
    },[])
    return(
        <UserContext.Provider value={{ usuario: "Caua", logado: logado}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;