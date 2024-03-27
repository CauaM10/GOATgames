import { View, FlatList, StyleSheet, Text} from "react-native";
import Produto from "./Produto";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";


const dados = [
    {
        id: "01",
        img: require( "../assets/FC24.png" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24"
    },
    {
        id: "02",
        img: require( "../assets/BombaPatch.webp" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "Bomba Patch 2024"
    },
    {
        id: "03",
        img: require( "../assets/MortalKombat.jpg" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "Street Fighter"
    },
    {
        id: "04",
        img: require( "../assets/streetfighter.webp" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "Mortal Kombat Hk MF"
    },
    {
        id: "05",
        img: require( "../assets/Carros2.jpg" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24"
    },
    {
        id: "06",
        img: require( "../assets/ForzaHorizon.jpg" ),
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24"
    },
    {
        id: "7",
        img: "",
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24"
    },
    {
        id: "08",
        img: "",
        preco: "R$259,99",
        parcelado: "12x R$ 25,52",
        nome: "FC24"
    }
]

export default function Itens( {navigation} )
{
    const {usuario} = useContext( UserContext );

    return(
        <View style={css.container}>
            <Text style={css.usuario}>Bem Vindo:{usuario}</Text>
            <FlatList 
            data={dados} 
            renderItem={ ({item}) => 
            <Produto 
            preco={item.preco} 
            parcelado={item.parcelado} 
            nome={item.nome}
            img={item.img}
            />
            } 
            keyExtractor={item => item.id}
            contentContainerStyle={css.container}
            horizontal={false}
            numColumns={2}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    usuario: {
        fontWeight: "500",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 20,
        fontSize: 18,
    }
})

