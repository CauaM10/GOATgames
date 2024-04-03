import { View,Image, Text,StyleSheet } from "react-native"

export default function Bateria()
{
    return(
        <View>
            
                <Image
        
                style={css.bateria}
                source={require( "../assets/bateria.png")}
      /> 
         <Text style={css.textbateria}>Sua bateria está acabando,
        </Text><Text style={css.textbateria2}>não será possível continuar sua compra!</Text>
        </View>
    )
 }

 const css = StyleSheet.create({

    bateria:{
        marginLeft: 130,
        marginTop:200

    }, textbateria:{
        width:" 70%",
        marginTop: 5,
        marginLeft: 110
    }, textbateria2:
    {
        marginLeft: 72

    }

 })