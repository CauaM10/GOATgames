import { NavigationContainer } from "@react-navigation/native"
import { View, Image, Text,StyleSheet, Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function InfoProduto({img, preco, parcelado, nome})
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
                <View style={css.buttoncenter}>
                    <TouchableOpacity style={css.ButtonComprar}><Text style={css.textcomprar}>COMPRAR</Text></TouchableOpacity>
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
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#1274BB"
        
    },
    tinyLogo:{
        width: 153,
        height: 217,
        marginTop: 25,
        borderRadius: 5
    },
    fotojogo:
    {
        alignItems: 'center',
        backgroundColor: "blue"
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
    },
    ButtonComprar:
    {
        width: "50%",
        height: 50,
        backgroundColor: "#1274BB",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 4,
        marginLeft:77,
        marginTop: 140
    },
    textcomprar:
    {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        
    },

    

 })