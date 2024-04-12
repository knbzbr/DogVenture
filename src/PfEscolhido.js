import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Local from './Local';

export default function PfEscolhido({nome, navigation, setDetalhe, imagem, telefone}) {
  return (
   <View style={css.container}>
      <Text style={css.titulo} onPress={() => setDetalhe( false ) }>{nome}</Text>
      <Image style={css.img} source={require("../assets/Avatar.png")}>{imagem}</Image>
      <Text style={css.contato}>Número para contato:</Text>
      <Text style={css.numero}>{telefone}</Text>
      <Text style={css.duracao}>Tempo Estimado do Passeio:</Text>
      <Text style={css.tempo}>45 min</Text>
      <TouchableOpacity>                        
                <Text style={css.btn1}>Realizar Pagamento</Text>
      </TouchableOpacity>
      <TouchableOpacity>                        
                <Text style={css.btn2} onPress={() => navigation.navigate('Local')}>Ir Para o Passeio</Text>
      </TouchableOpacity>
   </View>
  )
}
const css = StyleSheet.create({
   container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#528CC5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
  },
   titulo:{
      color: "white",
      fontWeight: "bold",
      fontSize: 40,
      textAlign: "center"
   },
   img:{
      width: "100%",
      height: 150,
      resizeMode: "contain",
      marginTop: 50
   },
   contato:{
      textAlign: "center",
      marginTop: "5%",
      color: "black",
      fontSize: 20
   },
   numero:{
      textAlign: "center",
      marginTop: "5%",
      color: "black",
      fontSize: 20
   },
   duracao:{
      textAlign: "center",
      marginTop: "5%",
      color: "black",
      fontSize: 20
   },
   tempo:{
      textAlign: "center",
      marginTop: "5%",
      color: "black",
      fontSize: 20
   },
   btn1:{
      marginTop: 20,
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      width: 250,
      height: 45,
      backgroundColor: "lightgrey",
      borderRadius: 5,
      justifyContent: "center",
      textAlign: "center",
      paddingTop: 7
  },
  btn2:{
   marginTop: 20,
   fontSize: 20,
   color: "white",
   fontWeight: "bold",
   width: 250,
   height: 45,
   backgroundColor: "#FFDE59",
   borderRadius: 5,
   justifyContent: "center",
   textAlign: "center",
   paddingTop: 7
}
})
