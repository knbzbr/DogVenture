import { StyleSheet,Text, View, Image, TouchableOpacity } from "react-native";

export default function ProdutoLista({id, imagem,nome,preco})
{
    return(
        <View style={css.cx}>
           <Image style={css.imagem} source={imagem} />
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>
            <TouchableOpacity style={css.cxbtn}>
                <Text style={css.btn}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btnn}>
                
            </TouchableOpacity>
            
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        width: "100%",
        height: 180,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",

    },
    nome: {
        fontWeight: "bold",
        fontSize: 13,
        textAlign:"center"
    },
    preco: {
        fontWeight: "bold",
        fontSize:15,
        textAlign:"center"
    },
    imagem:{
        width:130,
        height:100,
        resizeMode: "contain",
        marginTop:10,
        marginLeft: 15
    },
    btn:{
        width:"100%",
        height:40,
        backgroundColor:"#528CC5",
        borderRadius:5,
        padding:10,
        marginTop:5,
        fontWeight:"bold",
        color:"white",
    },
    cx:{
        borderWidth:0.5,
        borderStyle:"solid",
        borderColor:"black",
        borderRadius:5
    }
})