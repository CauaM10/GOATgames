
import 'react-native-gesture-handler'
import UserProvider from './src/Context/userContext';
import Rotas from './src/rotas'





export default function App(){
  return (
    <UserProvider>
     <Rotas/>
    </UserProvider>

  );


}

  
  



