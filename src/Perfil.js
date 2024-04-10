import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";

export default function Produto() {

    const { usuario } = useContext(UserContext);

    return (
        <View>
            <Text style={css.perfil}>Seu Perfil</Text>
            <TouchableOpacity style={css.img}>
            </TouchableOpacity>
            <View style={css.infoperfil}>
                <Text style={css.label}>Nome:</Text>
                <Text style={css.value}>{usuario}</Text>
            </View>
            <View style={css.infoperfil}>
                <Text style={css.label}>Email:</Text>
                <Text style={css.email}>{usuario}</Text>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    perfil: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    infoperfil: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 10,
    },
    email: {
      fontSize: 16,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});
  


