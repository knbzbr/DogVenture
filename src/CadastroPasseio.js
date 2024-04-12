import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { TextInput, Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default function CadastroPasseio({setCadastro, setCadastroPasseio, setLogado } ) {
    return (
        <View >
            <ScrollView>
                <View style={css.view}>
                    <Image style={css.logo} source={require("../assets/logo.jpg")} />
                    <Text style={css.texto}>Nome</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Nome Completo"
                    />
                    <Text style={css.tx1}>Data De Nacimento</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Data De Nacimento"
                    />
                    <Text style={css.tx2}>CPF</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="000.000.000-00"
                    />
                    <Text style={css.tx4}>RG</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="00.000.000-0"
                    />
                    <Text style={css.texto}>Sexo</Text>
                    <View style={css.cx1}>
                        <CheckBox></CheckBox>
                        <Text style={css.txtcx}>Masculino</Text>
                    </View>
                    <View style={css.cx1}>
                        <CheckBox></CheckBox>
                        <Text style={css.txtcx}>Feminino</Text>
                    </View>
                    <Text style={css.tx3}>Telefone</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Seu Telefone"
                    />
                    <Text style={css.tx3}>Endereço</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Seu Endereco"
                    />
                    <TouchableOpacity style={css.btn} onPress={() => { setCadastro( false ); setLogado( false ); setCadastroPasseio( false ); } }>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnn}>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#528CC5",
        alignItems: "center",
        textAlign:"center"
    },
    inputs: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
        backgroundColor: "#DCE5E8"
    },
    logo: {
        height: 190,
        width: 300
    },
    btn: {
        width: 200,
        height: 45,
        backgroundColor: "#FFDE59",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 7

    },
    btnn: {
        width: 200,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 7

    },
    texto: {
        textAlign: "left",
        marginRight: 307,
        marginTop: 20,
        color: "white"
    },
    tx1: {
        textAlign: "left",
        marginRight: 220,
        marginTop: 20,
        color: "white"
    },
    tx2: {
        textAlign: "left",
        marginRight: 322,
        marginTop: 20,
        color: "white"
    },
    tx3: {
        textAlign: "left",
        marginRight: 285,
        marginTop: 20,
        color: "white"
    },
    tx4:{
        textAlign: "left",
        marginRight: 325,
        marginTop: 20,
        color: "white"
    },
    cx1:{
        width:"100%",
        height:50,
        display:'flex', 
        flexDirection:"row",
        marginLeft:13
    },
    txtcx:{
        color:"white",
        marginTop:16,
        marginLeft: -17
    }

})
