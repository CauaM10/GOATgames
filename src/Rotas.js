import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import InfoProduto from './InfoProduto';
import Bateria from './Bateria'
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Carrinho from './Carrinho';
import Itens from './Itens'
import Perfil from './Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();



export default function Rotas() {

/*   const {logado} = useContext( UserContext );

    if( logado == false ){
        return( <Login/>)
    }
*/


  return (
      <NavigationContainer >
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:"black" , headerShown: false, tabBarStyle: {backgroundColor:"#6FA6FF"}}}>
          <Tab.Screen name="Carrinho" component={Carrinho} />
          <Tab.Screen name="InfoProduto" component={InfoProduto} />
          <Tab.Screen name="B" component={Bateria} /> 
          <Tab.Screen name="Jogos" component={Itens} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
     
  );
}