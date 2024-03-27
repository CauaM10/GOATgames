import { TextInput, View, StyleSheet, TouchableOpacity, Text, Linking, Image } from "react-native";

export default function Cadastro(navigation) {

    return (
        <View style={css.Megacontainer}>

            <View style={css.caixafoto}>
                <Image
                    style={css.image}
                    source={require("../assets/logo.pj.png")} />

            </View>




            <View style={css.container} >

                <TextInput
                    style={css.input}
                    placeholder="Usuario" placeholderTextColor={'white'} />
                <TextInput
                    style={css.input}
                    placeholder="Email" placeholderTextColor={'white'} />

                <TextInput
                    style={css.input}
                    placeholder="Senha" placeholderTextColor={'white'} />





                <TouchableOpacity style={css.botao}  >
                    <Text style={css.textbotao}>Login</Text>
                </TouchableOpacity>




            </View>
            <View style={css.caixa}>
                <View style={css.linha1} />
                <Text style={css.textlinha}>OR</Text>
                <View style={css.linha2} />
            </View>

            <View style={css.footer} >
                <Text style={css.textfooter}>Não tem uma conta? <Text style={css.textfooterazul}>Cadastre-se</Text></Text>
            </View>


        </View>

    )

}

const css = StyleSheet.create({

    Megacontainer: {

        width: "100%",
        height: 800,
        backgroundColor: "#F9F9F9",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"

    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "40%",
        marginTop: 5


    },
    caixafoto: {

        width: "60%",
        height: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 35




    },

    image: {

        width: 260,
        height: 230,
        resizeMode: "stretch",
        marginBottom: 20,



    },



    input: {
        width: "90%",
        height: 50,
        borderRadius: 5,
        padding: 15,
        backgroundColor: "#4991FD",
        marginTop: 10,
        color: 'white'


    },




    botao: {
        backgroundColor: "#6FA6FF",
        width: "90%",
        height: 60,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    textbotao: {
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 20,


        color: "white"

    },


    caixa: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        padding: 15,

    },
    linha1: {
        backgroundColor: "black",
        height: 2,
        width: "40%",
    },
    textlinha: {
        width: "10%",
        color: 'black',
        textAlign: "center",
        fontSize: 15
    },
    linha2: {
        backgroundColor: "black",
        height: 2,
        width: "40%"
    },
    footer: {
        width: "100%",
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'blue',
        borderTopWidth: 3,
        borderTopColor: '#E1DBDB',
        backgroundColor: "#F9F9F9"






    },
    textfooter: {
        color: "black",
        textAlign: 'center',
        marginTop: 10,


    },
    textfooterazul: {
        color: "#000AFF"
    }





});
