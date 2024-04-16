import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'


export const UserContext = createContext(0); 


function UserProvider({children}) 
{
    const [ logado, setLogado] = useState(false);
    const [ usuario, setUsuario] = useState(null);
    const [ detalhe, setDetalhe ] = useState(false);

    async function Login( email, senha)
    {
        if( email == "caua123@live.com" && senha == "123")
        {
            await AsyncStorage.setItem("usuario", "Caua")
            setLogado( true );
        }
    }

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
        <UserContext.Provider value={{ logado: logado, setLogado, Login, usuario: usuario, setUsuario, detalhe: detalhe, setDetalhe }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;