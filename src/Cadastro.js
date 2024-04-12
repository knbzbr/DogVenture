import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native'

export default function Cadastro({setCadastro, setLogado, setCadastroPasseio}) {





    function Cadastrar() {
        setCadastro();
        setLogado();
    }

    return (
        <View>
            <ScrollView>
                <View style={css.view}>
                    <Image style={css.logo} source={require("../assets/logo.jpg")} />
                    <Text style={css.texto}>Nome</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Nome"
                    />
                    <Text style={css.tx5}>Email</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Seu Email"
                    />
                    <Text style={css.tx3}>Telefone</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="(00)00000-0000"
                    />
                    <Text style={css.tx3}>Endereço</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Endereço"
                    />
                    <Text style={css.tx4}>Complemento</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Complemento"
                    />
                    <Text style={css.tx5}>Senha</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Senha"
                    />
                    <Text style={css.tx6}>Confirme a Senha</Text>
                    <TextInput
                        style={css.inputs}
                        placeholder="Confirme sua senha"
                    />
                        <TouchableOpacity onPress={Cadastrar} style={css.btn}>
                            <Text style={css.txtbtn} onPress={() => setLogado( false )}>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setCadastroPasseio(true); setCadastro( false ); setLogado( true ); }}>
                            <Text style={css.txt} >Faça parte da nossa equipe!</Text>
                        </TouchableOpacity>
                </View>

            </ScrollView >
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
        textAlign: "center"
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
        marginRight: 275,
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
    tx4: {
        textAlign: "left",
        marginRight: 260,
        marginTop: 20,
        color: "white"
    },
    txtbtn: {
        color: "white",
        fontSize:20
    },
    tx5: {
        textAlign: "left",
        marginRight: 310,
        marginTop: 20,
        color: "white"
    },
    tx6: {
        textAlign: "left",
        marginRight: 235,
        marginTop: 20,
        color: "white",
    },
    txt:{
        color:"white"
    }
})
