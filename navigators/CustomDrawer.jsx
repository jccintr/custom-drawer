import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView  >
    <View style={styles.header}>
      <FontAwesome name="user-circle" size={60} color="gray" />
      <Text style={{fontWeight:'bold'}}>Julio Cesar</Text>
      <Text>jccintr@gmail.com</Text>
    </View>
    
    <DrawerItem
     icon={()=><FontAwesome name="home" size={24} color="black" />}
     label="Tela Principal"
     onPress={() => alert('ola')}
   />
    <DrawerItem
     icon={()=><MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />}
     label="Histórico de Corridas"
     onPress={() => alert('ola')}
   />
    <DrawerItem
     icon={()=><FontAwesome name="user-circle" size={24} color="black" />}
     label="Meu Perfil"
     onPress={() => alert('ola')}
   />
    <DrawerItem
     icon={()=><FontAwesome6 name="whatsapp" size={24} color="black" />}
     label="Fale conosco"
     onPress={() => alert('ola')}
   />
  
   <DrawerItem
     icon={()=><MaterialIcons name="logout" size={24} color="black" />}
     label="Sair"
     onPress={() => navigation.reset({routes:[{name:'login'}]})}
   />
         
    </DrawerContentScrollView>
 </View>
  )
}

export default CustomDrawer



const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    header:{
        padding: 10,
        flexDirection:'column',
        alignItems: 'center',
    }
})