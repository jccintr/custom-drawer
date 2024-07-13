import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName="Preload">
        <Stack.Screen  name="Preload" component={Preload} options={{headerShown:false}}/>
        <Stack.Screen  name="login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen  name="cadastro" component={Cadastro} options={{headerTitle:'Cadastro'}}/>
       
        <Stack.Screen  name="HomeDrawer" component={DrawerNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
