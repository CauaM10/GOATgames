import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Perfil(){
  return (
    <View style={css.container}>
      <Image source={require("../assets/Perfil.webp")} style={css.imgperfil} />
      <Text style={css.nome}>Cristiano R.</Text>
      <View style={css.infoSection}>
        <Text style={css.label}>Email:</Text>
        <Text style={css.info}>cr7@mail.com</Text>
      </View>
      <View style={css.infoSection}>
        <Text style={css.label}>Telefone:</Text>
        <Text style={css.info}>(10) 7777-777</Text>
      </View>
      <Button title="Editar Perfil" style={css.b} />
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  imgperfil: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
});
