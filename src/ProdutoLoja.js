import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProdutoLista from "./ProdutoLista";
import Menu from "./Submenu";
const produtos = [
    {
        id: 1,
        nome: "Coleira de Camurça",
        preco: "R$149,90",
        imagem: require("../assets/coleira de camurça.jpg")
    },
    {
        id: 2,
        nome: "Coleira Peitoral",
        preco: "R$299,90",
        imagem: require("../assets/ColeiraPeitoral.jpg")
    },
    {
        id: 3,
        nome: "Bolinha Cravo",
        preco: "R$19,90",
        imagem: require("../assets/BolaCravo.jpg")
    },
    {
        id: 4,
        nome: "Mordedor Canino",
        preco: "R$37,90",
        imagem: require("../assets/MordedorCanino.jpg")
    },
    {
        id: 5,
        nome: " Ração Special Dog",
        preco: "R$158,90",
        imagem: require("../assets/Racao1.jpg")
    },
    {
        id: 6,
        nome: " Ração Pedigree",
        preco: "R$149,90",
        imagem: require("../assets/RacaoPedigree.jpg")
    },
    {
        id: 7,
        nome: "Casa de Madeira",
        preco: "R$490,90",
        imagem: require("../assets/casamadeira.jpg")
    },
    {
        id: 8,
        nome: "Casinha de 2 andares",
        preco: "R$199,90",
        imagem: require("../assets/casa2a.jpg")
    },
    {
        id: 9,
        nome: "Casinha Madeira Rustica",
        preco: "R$299,90",
        imagem: require("../assets/casa bambu.jpg")
    },
    {
        id: 10,
        nome: " Ração Pedigree",
        preco: "R$149,90",
        imagem: require("../assets/casona.jpg")
    }
]



export default function ProdutoLoja() {
    return (
        <View style={css.view}>
            <View>
            <Text style={css.titulo}>Conheça Nossa Loja</Text>
                <View style={css.bxpr}>
                    
                    <View style={css.box}>
                        <View style={css.bx}>
                            <Text style={css.txtbx}>Coleiras</Text>
                        </View>
                        <View style={css.bx}>
                            <Text style={css.txtbx}>Casinha</Text>
                        </View>
                        <View style={css.bx}>
                            <Text style={css.txtbx}>Roupas</Text>
                        </View>
                        <View style={css.bx}>
                            <Text style={css.txtbx}>Ração</Text>
                        </View>
                    </View>
                    <Text style={css.txt}>Promoções</Text>
                </View>


                <FlatList
                    data={produtos}
                    renderItem={({ item }) => <ProdutoLista id={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        width: "100%",
                        padding: 20,
                        gap: 20
                    }}

                    numColumns={2}
                    style={css.itens}
                />
            </View>



        </View>


    )
};

const css = StyleSheet.create({
    view: {
        backgroundColor: "white",
        textAlign: "center",
        alignItems: "center"
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 30,
        marginTop:40,
        textAlign:"center"
    },
    box: {
        width: "100%",
        height: 50,
        backgroundColor: "#528CC5",
        flexDirection: "row",
        position: "absolute",
    },
    bx: {
        width: "19%",
        height: 50,
        justifyContent: "center",
        marginLeft: 20,
    },
    itens: {
        width: "100%",
        height: "100%",
        textAlign: "center"
    },
    txt: {
        fontSize: 30,
        marginTop: 60,
        fontWeight: "bold",
        textAlign: "center"
    },
    fm: {
        height: 500
    },
    bxpr: {
        marginTop:20
    },
    txtbx: {
        fontSize:17,
        color:"white"
    }
})


