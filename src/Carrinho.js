import { useContext } from "react"
import { View, Text,StyleSheet, Image } from "react-native"
import {UserContext} from "./Context/UserContext"



export default function Carrinho()
{
    const {usuario} = useContext(UserContext)


    
    return(
        <>
        <View style={css.logo}>
        <Image
        style={css.LogoGoat}
        source={require( "../assets/LogoGoat.png")}
        /> 
        </View>
        <View style={css.logo2} ><Text>Bem vindo:{usuario}</Text></View>
        </>
        
    )
 }
 const css = StyleSheet.create({
    logo: {

        height: 100,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center"
        
        
    },
    logo2:{
        height: "100%",
        width: "100%",
        backgroundColor: "lightgray"
    }, LogoGoat:{
        
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: "center"
        

    }
 })