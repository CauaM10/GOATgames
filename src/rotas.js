import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext } from './Context/userContext';
import Login from "./login"
import Cadastro from './cadastro'

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const {logado} = useContext (UserContext);
    
    if( logado == false ){
        return(<Login/>)
    }
  return (
   
         <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login} />
           <Tab.Screen name='Cadastro' component={Cadastro} />
        </Tab.Navigator>
      </NavigationContainer>
    
   
  )
}