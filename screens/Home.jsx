import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Home Screen</Text>
      <View style={{height:20}}/>
      <Button title='Ir para Profile' onPress={()=>navigation.navigate('HomeDrawer', { screen: 'Profile' })}/>
      <View style={{height:20}}/>
      <Button title='Logout' onPress={()=>navigation.reset({routes:[{name:'login'}]})}/>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})