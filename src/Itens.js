import { View, FlatList, StyleSheet, Text, Image, Button } from "react-native";
import Produto from "./Produto";
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import { useBatteryLevel } from "expo-battery";

const dados = [
    {
        id: "01",
        img: require("../assets/FC24.png"),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24",
        console: "PS2 2024"
    },
    {
        id: "02",
        img: require("../assets/BombaPatch.webp"),
        preco: "R$30,50",
        parcelado: "2x R$ 15,25",
        nome: "Bomba Patch 2024",
        console: "PS2 2024"
    },
    {
        id: "03",
        img: require("../assets/MortalKombat.jpg"),
        preco: "R$59,90",
        parcelado: "12x R$ 5,82",
        nome: "Mortal Kombat Hk MF",
        console: "PS2 2024"
    },
    {
        id: "04",
        img: require("../assets/streetfighter.webp"),
        preco: "R$329,90",
        parcelado: "10x R$ 32,99",
        nome: "Street Fighter",
        console: "PS2 2024"
    },
    {
        id: "05",
        img: require("../assets/Carros2.jpg"),
        preco: "R$25,90",
        parcelado: "2x R$ 12,95",
        nome: "Cars2",
        console: "PS2 2024"
    },
    {
        id: "06",
        img: require("../assets/ForzaHorizon.jpg"),
        preco: "R$193,00",
        parcelado: "6x R$ 32,17",
        nome: "Forza Horizon",
        console: "PS2 2024"
    },
    {
        id: "7",
        img: "",
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24",
        console: "PS2 2024"
    },
    {
        id: "08",
        img: "",
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24",
        console: "PS2 2024"
    }
]

export default function Itens({ navigation }) {

    const { usuario, detalhe, setDetalhe } = useContext(UserContext);
    const [bateria, setBateria] = useState();

    const batteryLevel = useBatteryLevel();

    

   
    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0));
    }, [batteryLevel]);


    if(bateria < 20) {
        return (
            <>
            
            </>
        )
    }


    if (detalhe) {
        return (
            <>
                <Text>Detalhes</Text>
                <Button title="fechar" onPress={() => setDetalhe(false)} />
            </>

        )
    }

    return (

        <>
            {bateria < 20 ?
                <>
                <View>
                    <Image
                        style={css.bateria}
                        source={require("../assets/bateria.png")} />
                    <Text style={css.textbateria}>Sua bateria está acabando,
                    </Text><Text style={css.textbateria2}>não será possível continuar sua compra!</Text>
                </View>
                </>
                :
                <>
                
                    <View style={css.logo}>
                        <Image
                            style={css.LogoGoat}
                            source={require("../assets/LogoGoat.png")}
                        />
                    </View>
                    <View style={css.container}>
                        <Text style={css.usuario}>Bem Vindo, {usuario}!</Text>
                        <FlatList
                            data={dados}
                            renderItem={({ item }) =>
                                <Produto 
                                    preco={item.preco}
                                    parcelado={item.parcelado}
                                    nome={item.nome}
                                    img={item.img} 
                                    tipo={item.console}
                                       
                                    

                                />

                            }
                            keyExtractor={item => item.id}
                            contentContainerStyle={css.container}
                            horizontal={false}
                            numColumns={2}
                        />

                    </View>

                </>
            }
        </>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    usuario: {
        fontWeight: "500",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 20,
        fontSize: 18,
        color: "#1274BB"
    },
    logo: {

        height: 100,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center"


    },
    LogoGoat: {

        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: "center"
    },
    bateria: {
        marginLeft: 130,
        marginTop: 300

    }, 
    textbateria: {
        width: " 70%",
        marginTop: 5,
        marginLeft: 110
    }, 
    textbateria2:{
        marginLeft: 72
    }
})