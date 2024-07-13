import { StyleSheet, Text, View,Pressable,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Preload = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Preload Screen</Text>
      <View style={{height:20}}/>
      <Button title='Ir para Login' onPress={()=>navigation.reset({routes:[{name:'login'}]})}/>
       
    </View>
  )
}

export default Preload

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})