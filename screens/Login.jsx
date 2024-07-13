import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Login Screen</Text>
      <View style={{height:20}}/>
      <Button title='Ir para Cadastro' onPress={()=>navigation.navigate('cadastro')}/>
        <View style={{height:20}}/>
      <Button title='Ir para Home' onPress={()=>navigation.reset({routes:[{name:'HomeDrawer'}]})}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})