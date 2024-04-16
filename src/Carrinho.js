import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'


const INITIAL_PRODUCTS = []








export default function Carrinho() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS); 
  const [frete, setFrete] = useState(null); 
  const [ total, setTotal ] = useState(0);


  useEffect(() => {
    const getProductsFromStorage = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('Carrinho');
        if (storedProducts !== null) {
          const parsedProducts = JSON.parse(storedProducts);
          setProducts(parsedProducts);
        }
      } catch (error) {
        console.error('Error fetching products from AsyncStorage:', error);
      }
    };

    getProductsFromStorage();
  }, []);


  const handleFreteCalculation = () => {

    setFrete(20.00); 
  };

  const handleRemoveProduct = async (productId) => {
    try {

      const currentCart = await AsyncStorage.getItem('Carrinho');
      if (currentCart !== null) {
        const parsedProducts = JSON.parse(currentCart);


        const updatedProducts = parsedProducts.filter((product) => product.id !== productId);


        await AsyncStorage.setItem('Carrinho', JSON.stringify(updatedProducts));


        setProducts(updatedProducts);
      }
    } catch (error) {
      console.error('Error removing product from AsyncStorage:', error);
    }
  };

  useEffect(() => {

    calculateTotalPrice();

  }, [products]);

    const calculateTotalPrice = () => {
      if (products.length === 0) {
        return 0;
      }
      let valorTotal = 0;
      products.map( (item) => valorTotal += parseFloat( item.preco.replace( "R$" , "" ).replace( ",", "." ) ) );
      setTotal( valorTotal.toFixed(2).replace( "." , "," ) );
    };


  return (
    <>
      <ScrollView style={css.altura}>
      <View style={css.logo}>
        <Image style={css.LogoGoat} source={require('../assets/LogoGoat.png')} />
      </View>
      
      <View >
        <View style={css.logo2}>
          <Text style={{ marginLeft: '5%', marginTop: 10, fontWeight: 'bold' }}>
            <Image style={css.apagar} source={require('../assets/voltar.png')}></Image>
            Carrinho
          </Text>

          {(products.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 10 }}>
              Seu carrinho está vazio!
            </Text>
          ) : (
            products.map((product) => (
              <View key={product.id} style={css.caixas1c}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={css.textNomeData}>
                    <Text style={{ marginLeft: "10%", marginTop: 10 }}>{product.nome}</Text>
                    <Text style={{ marginLeft: '10%', marginTop: 3 }}>PS4 2024</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => handleRemoveProduct(product.id)}>
                      <Image style={css.apagar} source={require('../assets/apagar.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={css.textpreco}>R$ {product.preco}</Text>
                <Text style={{ marginLeft: '5%', marginTop: 10 }}>Estoque: Disponivel</Text>
              </View>
            )))
          )}
        </View>

        <Text style={{ marginLeft: '5%', marginTop: 15, fontWeight: 'bold' }}>
          Calcule o frete:
        </Text>
        <View style={css.caixa2c}>
          <TextInput
            keyboardType="numeric"
            style={{ width: '65%', marginLeft: '5%', marginTop: 7 }}
            placeholder="Digite seu CEP"
          />
          <TouchableOpacity onPress={handleFreteCalculation}>
            <Text style={{ marginLeft: "70%", marginTop: -25 }}>
              <MaterialCommunityIcons name="truck-fast" color="black" /> Calcular
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={css.cep}>Não sei meu CEP</Text>

        <View style={css.caixa3c}>
          <Text style={{ marginLeft: "42%" }}>Total: <Text style={{ fontWeight: "bold", fontSize: 17 }}>R$ {total}</Text></Text>
          <Text>via Pix por <Text style={{ fontWeight: "bold" }}>R$206,91</Text> com<Text style={{ fontWeight: "bold" }}> 10% de desconto</Text></Text>
          <Text style={{ marginLeft: "12%" }}>ou em até <Text style={{ fontWeight: "bold" }}>10x</Text> de <Text style={{ fontWeight: "bold" }}>R$22,99</Text> sem juros </Text>
        </View>

        <View style={css.ButtonsEdit}>
          <TouchableOpacity style={css.ButtonComprar1}>
            <Text style={css.textcomprar1}>Continuar comprando</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.ButtonComprar2} disabled={frete === null}>
            <Text style={css.textcomprar2}>Finalizar compra</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 90}}></View>

      </View>

      </ScrollView>

     

    </>
  );
}
const css = StyleSheet.create({
  altura: {
    flex: 1,
    height: 500
  },
  logo: {
    height: 100,
    backgroundColor: "white",
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
    justifyContent: "center",
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
  },
  cep:
  {
    marginLeft: "5%",
    color: "#1274BB",
    marginTop: 1,
    fontWeight: "bold"

  },
  textpreco:
  {
    fontSize: 16,
    marginLeft: "40%",
    fontWeight: "bold"
  },
  apagar:
  {
    height: 25,
    width: 25,
    marginLeft: "60%",
    marginTop: 15
  }

})