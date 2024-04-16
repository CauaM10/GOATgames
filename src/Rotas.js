import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Carrinho from './Carrinho';
import Itens from './Itens'
import Perfil from './Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


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
        <Tab.Screen options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name= "home-circle" color= "black" size={size}></MaterialCommunityIcons>
            ),
          }} name="Jogos" component={Itens} />
          <Tab.Screen options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name= "cart" color= "black" size={size}></MaterialCommunityIcons>
            ),
          }} name="Carrinho" component={Carrinho} />
          
          <Tab.Screen options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name= "account-circle" color= "black" size={size}></MaterialCommunityIcons>
            ),
          }} name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
     
  );
}