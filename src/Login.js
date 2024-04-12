import React, { useState } from "react"
import {Keyboard, TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native"


export default function Login({ setLogado, setCadastro}) {

    const[ email, setEmail] = useState("");
    const[ senha, setSenha] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email == "" && senha == "") {
            setLogado(true);
        }
    }

    function Cadastrar()
    {
        setLogado(true);
        setCadastro(true);
    }

  return (
    <View style={css.view}>
        <TextInput
            onChangeText={(digitado) => setEmail(digitado)}
            value={email}
            style={css.inputs}
        />
        <TextInput
             onChangeText={(digitado) => setSenha(digitado)}
             value={senha}
             style={css.inputs}
        />
        <TouchableOpacity onPress={Login}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Cadastrar}>
            <Text>Cadastre-se</Text>
        </TouchableOpacity>
    </View>
  )
}
    const css = StyleSheet.create({
        view:{
            width:"100%",
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems:"center",
        },
        inputs:{
            width: "90%",
            borderWidth: 1,
            marginTop: 25
        }
    })
