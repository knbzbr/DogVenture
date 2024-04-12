import {  StyleSheet,View, FlatList,Text } from "react-native";
import ProfissionalLista from "./ProfissionalLista";
import { useState } from "react";
import PfEscolhido from "./PfEscolhido";

const profissionais = [
    {
       id: 1,
       nome: "Roberto",
       telefone: "(14) 98346-7623",
       imagem: require("../assets/Avatar.png")
    },
    {
        id: 2,
        nome: "Jeferson",
        telefone: "(14) 98213-8990",
        imagem: require("../assets/Avatar.png")
    },
     {
        id: 3,
        nome: "Juliana",
        telefone: "(14) 98124-5467",
        imagem: require("../assets/Avatar.png")
     },
     {
        id: 4,
        nome: "Rebeca",
        telefone: "(14) 98346-7623",
        imagem: require("../assets/Avatar.png")
     },
     {
        id: 5,
        nome: "Luzia",
        telefone: "(14) 98123-8734",
        imagem: require("../assets/Avatar.png")
     },
     {
        id: 6,
        nome: "Paulo",
        telefone: "(11) 98172-9232",
        imagem: require("../assets/Avatar.png")
     },
     {
        id: 7,
        nome: "Ricardo",
        telefone: "(14) 99765-9090",
        imagem: require("../assets/Avatar.png")
     },
     {
        id: 6,
        nome: "Débora",
        telefone: "(11) 99465-7657",
        imagem: require("../assets/Avatar.png")
     },

]

export default function  Profissional({navigation}){

    const[ detalhe, setDetalhe ] = useState(false);
    const[ nome, setNome ] = useState("");
    const[ telefone, setTelefone ] = useState("");
    const[ imagem, setImagem ] = useState("");

    if( detalhe ) {
        return( <PfEscolhido setDetalhe={setDetalhe} navigation={navigation} nome={nome} telefone={telefone} imagem={imagem} />)
    }

    return(
        <View style={css.container}>
            <Text style={css.Titulo}>Seja Bem-Vindo(a)!</Text>
            <Text style={css.subtitulo}>Escolha o seu Cãopanheiro</Text>
            <FlatList
                data={profissionais}
                renderItem={({ item }) => <ProfissionalLista id={item.id} nome={item.nome} telefone={item.telefone} imagem={item.imagem} setDetalhe={setDetalhe} setNome={setNome} setTelefone={setTelefone} setImagem={setImagem} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    width: "50%",
                    padding: 10,
                    gap: 20
                }}
                numColumns={2}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        height: "100%",
        backgroundColor: "#528CC5"
    },
    Titulo: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
    },
    subtitulo: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
    }
})