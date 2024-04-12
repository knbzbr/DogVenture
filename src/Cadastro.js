import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

export default function Cadastro( {setCadastro, setLogado}) {
    function Cadastrar()
    {
        setCadastro(false);
        setLogado(false);
    }
    function Voltar()
    {
        setCadastro(false);
        setLogado(false);
    }
  return (
    <View>
        <TextInput/>
        <TextInput/>
        <TouchableOpacity onPress={Cadastrar}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Voltar}>
            <Text>Voltar</Text>
        </TouchableOpacity>
    </View>
  )
}
