import React from 'react'
import {Text, View, StyleSheet, Image, Button, Alert} from 'react-native'
import LogoImage from './assets/logo.png'

const App = ()=>{
  return(  
    <View style={styles.contenido}>
      <Image
      // source = {{uri:'appcel/assets/logo.png'}}
      source = {LogoImage}
      style={styles.imageStyle}
      />
      {/* <Text style={styles.title}>
        JJ BURGUER
      </Text> */}
      <Button 
      onPress= {()=>
      Alert.alert("Ok")}
      title= "Entrar"
      />
     
    </View>
  )}

  const styles = StyleSheet.create({
    contenido:{flex:1, justifyContent:'center', alignItems:'center'},
    // title: {fontSize:30},
    imageStyle: {height:175, width:300, borderRadius:90}
  })
export default App;