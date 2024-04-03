import { NavigationContainer } from "@react-navigation/native"
import { View, Image, Text,StyleSheet, Button, TouchableOpacity } from "react-native"



export default function InfoProduto({img, preco, parcelado, nome})
{
    return(
        <View style={{backgroundColor: "lightgray", flex: 1 }}>
            
            <View style={css.list}>
              <View style = {css.fotojogo}>        
                <Image
                    style={css.tinyLogo}
                    source={require( "../assets/BombaPatchPS2.png")}
                    /> 
                </View>
                <Text style={css.nome}>Bomba Patch 2024</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={css.codigo}>Código:</Text>
                    <Text style={css.marca}>Marca:</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={css.numerocd}>1234-456-789</Text>
                    <Text style={css.marcanome}>Geomatrix</Text>
                </View>
                <View>
                    <Text style={css.Text1}>R$ 220,00</Text>
                    <Text style={css.Text2}>até<Text style={{fontWeight: "bold" }}> 10x</Text> de<Text Text style={{fontWeight: "bold" }}> R$ 20,00</Text> sem juros</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={css.Text3} >ou<Text style={{color: "#08C28B", fontSize: 18}}> R$ 195,00</Text > via </Text>
                        <Image style={css.logopix} source={require( "../assets/LogoPix.png")}></Image>
                    </View>
                </View>
                <View style={css.buttoncenter}>
                    <TouchableOpacity style={css.ButtonComprar}><Text style={css.textcomprar}>COMPRAR</Text></TouchableOpacity>
                </View>
                
            </View>
        </View>
        
    )
 }

 const css = StyleSheet.create({
    logo: {

        height: 100,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center"
        
        
    },

    list:{
        width:"80%",
        margin: 33,
        height: "88%",
        marginTop: 50,
        backgroundColor: "white",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#1274BB"
    },
    tinyLogo:{
        width: 210,
        height: 300,
        marginTop: 30,
        borderRadius: 5
    },
    fotojogo:
    {
        alignItems: 'center',
    },
    nome: 
    {
        fontSize: 16,
        marginTop: 29,
        marginLeft: 25,
        fontWeight: "bold"
    },
    codigo:
    {
        marginTop: 10,
        marginLeft: 25
    },
    numerocd:
    {
        marginLeft: 25,
        fontWeight: "bold"
    },
    marca: 
    {
        marginLeft: 120,
        marginTop: 10,
        
    },
    marcanome:
    {
        marginLeft: 75,
        fontWeight: "bold"
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
        marginTop: 35
    },
    textcomprar:
    {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    Text1:
    {
        marginTop: 12,
        marginLeft: 25,
        fontWeight: "bold"

    },
    Text2:
    {
        marginTop: 7,
        marginLeft: 25
    },
    Text3:
    {
        marginTop: 7,
        marginLeft: 25,
        fontWeight: "bold"
    },
    logopix:
    {
        height: 40,
        width: 60
    }

    

 })