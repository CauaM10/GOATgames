import { useContext } from "react"
import { View, Text,StyleSheet, Image, TouchableOpacity } from "react-native"
import {UserContext} from "./Context/UserContext"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



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
        <View style={css.logo2} >
            
            <Text style={{ marginLeft: "5%", marginTop: 10, fontWeight: "bold"}}><Image style={css.apagar} source={require( "../assets/voltar.png")}></Image> Carrinho</Text>

            <View style={css.caixas1c}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View  style={css.textNomeData}>
                        <Text style={{ marginLeft: "5%", marginTop: 5}}>Bomba Patch 2024</Text>
                        <Text style={{ marginLeft: "5%", marginTop: 2}}>2024 - PS2</Text>
                    </View>
                    <View>
                    <Image style={css.apagar} source={require( "../assets/apagar.png")}></Image>
                    </View>
                    
                </View>
                    <Text style={css.textpreco}>R$ 229,90</Text>
                    <Text style={{ marginLeft: "2%", marginTop: 5}}>Estoque: disponível</Text>
            </View>


            <Text style={{ marginLeft: "5%", marginTop: 15, fontWeight: "bold"}}>Calcule o frete:</Text>
            <View style={css.caixa2c}>
                <Text style={{ marginLeft: "70%", marginTop:8}} ><MaterialCommunityIcons name= "truck-fast" color= "black" ></MaterialCommunityIcons> Calcular</Text>
            </View>
            <Text style={css.cep}>Não sei meu CEP</Text>
            <View style={css.caixa3c}>
                <Text style={{ marginLeft: "49%"}}>Total: <Text style={{fontWeight: "bold"}}>R$ 259,90</Text></Text>
                <Text>via Pix por <Text style={{fontWeight: "bold"}}>R$206,91</Text> com<Text style={{fontWeight: "bold"}}> 10% de desconto</Text></Text>
                <Text style={{ marginLeft: "12%"}}>ou em até <Text style={{fontWeight: "bold"}}>10x</Text> de <Text style={{fontWeight: "bold"}}>R$22,99</Text> sem juros </Text>
            </View>
            <View style={css.ButtonsEdit} >
            <TouchableOpacity style={css.ButtonComprar1}><Text style={css.textcomprar1}>Continuar comprado</Text></TouchableOpacity>
            <TouchableOpacity style={css.ButtonComprar2}><Text style={css.textcomprar2}>Finalizar compra</Text></TouchableOpacity>
            </View>

        </View>

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
        backgroundColor: ""
    }, LogoGoat:{
        
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: "center"
        

    },     
    ButtonComprar2:
    {
        width: "90%",
        height: 50,
        backgroundColor: "#6FA6FF",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 20
        
    },
    textcomprar2:
    {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    ButtonComprar1:
    {
        width: "90%",
        height: 50,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#1274BB"
        
        
    },
    textcomprar1:
    {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    ButtonsEdit:
    {
        justifyContent:"center",
        alignItems: "center"
    }, 
    caixa3c:
    {
        width: "90%",
        height: 115,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 20,
        marginLeft: "5%",
        borderWidth: 1,
        borderColor: "#1274BB"
    },
    caixas1c:
    {
        width: "90%",
        height: 115,
        backgroundColor: "white",
        borderRadius: 5,
        marginLeft: "5%",
        borderWidth: 1,
        borderColor: "#1274BB",
        marginTop: 30
    },
    caixa2c:
    {
        width: "90%",
        height: 45,
        backgroundColor: "#FFFF",
        marginLeft: "5%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#1274BB",
        marginTop: 10

    }, cep:
    {
        marginLeft: "5%",
        color: "#1274BB",
        marginTop: 1,
        fontWeight: "bold"
        
    },
    textpreco:
    {
        marginLeft: "40%",
        fontWeight: "bold"
    }, 
    apagar:
    {
        height: 25,
        width: 25,
         marginLeft: 170,
         marginTop: 10
    },
    textNomeData:
    {
        marginTop: 5,
        marginLef: 10
    }
 })