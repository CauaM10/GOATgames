import { createContext, useEffect, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext() ;

function UserProvider ({children}) 
{
    function Login( email, senha )
    {
        if( email == "cria@gmail.com" && senha == "1234") {
            setLogado(true);
        }
    }

    const[ usuario, setUsuario ] = useState(null);
    const[ logado, setLogado ] = useState(false)

    async function infoUsuario() {
        const usuario = await AsyncStorage.getItem( "usuario" );
          if(usuario){
            setUsuario( usuario );
            setLogado(true);
          }
         
        
      }
      useEffect(()=> {
        infoUsuario()

      }, [])
    

  return (
    <UserContext.Provider value={ { usuario: usuario, logado: logado , Login, infoUsuario } }>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;