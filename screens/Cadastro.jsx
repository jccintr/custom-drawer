import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Cadastro</Text>
      <View style={{height:20}}/>
      <Button title='Ir para Login' onPress={()=>navigation.navigate('login')}/>
    </View>
  )
}

export default Cadastro

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})