import { NavigationContainer } from "@react-navigation/native"
import { View, Image, Text,StyleSheet } from "react-native"




export default function InfoProduto()
{
    return(
        <View style={{backgroundColor: "lightgray", flex: 1}}>
            <View style={css.list}>
              <View style = {css.fotojogo}>        
                <Image
                    style={css.tinyLogo}
                    source={require( "../assets/BombaPatchPS2.png")}
                    /> 
                </View>
                <Text>Bomba Patch 2024</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text >Codigo:</Text>
                    <Text>Marca:</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <Text>1234-456-789</Text>
                    <Text>Geomatrix</Text>
                </View>
            </View>
        </View>
        
    )
 }

 const css = StyleSheet.create({

    list:{
        width:"80%",
        margin: 33,
        height: 559,
        marginTop: 40,
        backgroundColor: "white",
        borderRadius: 5,
        
    },
    tinyLogo:{
        width: 153,
        height: 217,
        marginTop: 25,
        borderRadius: 5
    },
    fotojogo:
    {
        alignItems: 'center'
    },



 })