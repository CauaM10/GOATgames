
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Produto({ img, preco, parcelado, tipo, nome, navigation }) {

  const handleAddToCart = async () => {
    try {

      const currentCart = await AsyncStorage.getItem('Carrinho') || '[]';
      const parsedCart = JSON.parse(currentCart);


      const newItem = {
        id: Math.random().toString(36).substring(2, 15), 
        nome,
        preco,
        parcelado,

      };


      const updatedCart = [...parsedCart, newItem];

      await AsyncStorage.setItem('Carrinho', JSON.stringify(updatedCart));

      console.log('Product added to cart!'); 
    } catch (error) {
      console.log( error );
    }
  };

  return (
    <View style={css.caixa}>
      <Image style={css.img} source={img} />
      <View style={css.linha}></View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={css.flex}>
          <Text style={css.preco}>{preco}</Text>
        </View>
        <View>
          <TouchableOpacity style={css.botaoVerDetalhes} onPress={handleAddToCart}>
            <Image source={require("../assets/carrinho.png")} style={{ marginLeft: 60, marginTop: 10, width: 30, height: 30 }}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={css.parcelado}>{parcelado}</Text>
      <Text style={css.parcelado}>{nome}</Text>

    </View>
  );
}
const css = StyleSheet.create({
  caixa: {
    width: "40%",
    height: 300,
    backgroundColor: "white",
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
    borderRadius: 4,
    marginTop: 20,
    height: 160,
    width: "85%",
    marginLeft: 13,
  },
  linha: {
    backgroundColor: "gray",
    height: 1,
    width: "100%",
    marginTop: 30
  }
  , flex:
  {

  }
})
