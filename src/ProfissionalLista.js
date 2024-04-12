import { StyleSheet,Text, View, Image, TouchableOpacity,Button, Pressable } from "react-native";
import PfEscolhido from "../src/PfEscolhido";

export default function ProfissionalLista({id, nome, telefone, imagem, setDetalhe, setNome, setTelefone, setImagem, }) {
    function ExibeProfissional()
    {
        setNome( nome );
        setTelefone( telefone );
        setDetalhe( true );
    }
    return(       
        <View style={css.container}>           
            <Image source={imagem} style={css.imagem}/>
            <Text style={css.nome}>{nome}</Text>
            <Text>{telefone}</Text>                 
            <TouchableOpacity style={css.btn} onPress={ExibeProfissional}>                        
                <Text style={css.btn}>Ver Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}
 
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 270,
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30, 
        borderRadius: 5
    },
    nome: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10
    },
    imagem: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
        marginTop: 10
    },
    btn:{
        marginTop: 15,
        fontSize: 20,
        color: "white",
        width: 100,
        height: 30,
        backgroundColor: "#528CC5",
        textAlign: "center",
        borderRadius: 6,
        justifyContent: "center"
    }
})