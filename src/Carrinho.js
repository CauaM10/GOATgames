import { useContext } from "react"
import { View, Text,StyleSheet } from "react-native"
import {UserContext} from "./Context/UserContext"



export default function Carrinho()
{
    const {usuario} = useContext(UserContext)


    return(
        <View>
            <Text>Bem vindo:{usuario}</Text>
        </View>
    )
 }