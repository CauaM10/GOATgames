import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Itens from "./Itens";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

export default function Rotas()
{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Início" component={Itens} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
      </NavigationContainer>
    )
} 