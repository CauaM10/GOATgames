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
                <Text style={css.nome}>Bomba Patch 2024</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={css.codigo}>Código:<Text style={css.numerocd}>1234-456-789</Text></Text>
                    <Text style={css.marca}>Marca:<Text style={css.marcanome}>Geomatrix</Text></Text>
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
    nome: 
    {
        marginTop: 50,
        marginLeft: 10,
        fontWeight: "bold"
    },
    codigo:
    {
        marginTop: 5,
        marginLeft: 10
    },
    numerocd:
    {
        marginLeft: 5,
        color: "lightgray",
        fontWeight: "bold"
    },
    marca: 
    {
        marginLeft: 40,
        marginTop: 5,
        
    },
    marcanome:
    {
        color: "blue"
    }
    

 })