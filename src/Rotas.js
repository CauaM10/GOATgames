import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InfoProduto from './InfoProduto';
import Bateria from './Bateria'
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Carrinho from './Carrinho';
import Itens from './Itens'
import Perfil from './Perfil'



const Drawer = createDrawerNavigator();


export default function Rotas() {

/*   const {logado} = useContext( UserContext );

    if( logado == false ){
        return( <Login/>)
    }
*/


  return (
      <NavigationContainer >
        <Drawer.Navigator screenOptions={{tabBarActiveTintColor:"red" , headerShown: false, tabBarStyle: {backgroundColor:"red"}}}>
          <Drawer.Screen name="Carrinho" component={Carrinho} />
          <Drawer.Screen name="InfoProduto" component={InfoProduto} />
          <Drawer.Screen name="B" component={Bateria} /> 
          <Drawer.Screen name="Jogos" component={Itens} />
          <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
      </NavigationContainer>
     
  );
}