import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CustomDrawer from './CustomDrawer';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={ props => <CustomDrawer {...props}/> }>
       <Drawer.Screen name="Home" component={Home} />
       <Drawer.Screen name="Profile" component={Profile} />
      
  </Drawer.Navigator>
  )
}

export default DrawerNavigator
