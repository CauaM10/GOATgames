import { Image, StyleSheet, Text, View } from "react-native";

export default function Produto({img, preco, parcelado, nome}) {
    return(
        <View style={css.caixa}>
            <Image style={css.img} source={img}/>
            <View style={css.linha}></View>
            <Text style={css.preco}>{preco}</Text>
            <Text style={css.parcelado}>{parcelado}</Text>
            <Text style={css.parcelado}>{nome}</Text>
        </View>
    )
}
//source={require("../assets/FC24.png")}
const css = StyleSheet.create({
    caixa: {
        width: "40%",
        height: 300,
        backgroundColor: "lightgray",
        borderColor: "#1274BB",
        margin: 19,
        borderRadius: 9,
        borderWidth: 1,
        diplay: "flex",
    },
    preco: {
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: 17,
        marginLeft: 5,
    },
    parcelado: {
        fontStyle: "italic",
        marginTop: 3,
        marginLeft: 3.5
    },
    nome: {
        fontStyle: "italic",
        marginTop: 3,

    },
    img: {
        borderRadius:4,
        marginTop: 20,
        height: 160,
        width: "85%",
        marginLeft: 13,
    },
    linha: {
        backgroundColor:  "gray",
        height: 1,
        width:"100%",
        marginTop: 30
    }
})
    