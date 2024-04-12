import { View, Text, TextInput, StyleSheet,Image, TouchableOpacity} from "react-native";
import ProfissionalLista from "./ProfissionalLista";
import Profissional from "./Profissional";
import { useState } from "react"


export default function  Home({navigation}){
    const[ Profissional, setProfissional ] = useState( false );

    if( Profissional ){
        return(<Profissional setProfissional={setProfissional}/>)
    }
    return(
        <View style={css.container}>
            <Image style={css.logo} source={require("../assets/logo.png")}></Image>
            <Text style={css.titulo}>Agende o seu Passeio</Text>
            <Text style={css.subtitulo}>Nome do Pet</Text>
            <TextInput
            style={css.inputs}
            placeholder="Nome do Seu Pet"
            value={Text}
            />
            <Text style={css.txt1}>Data e Hora do Passeio</Text>
            <TextInput
            style={css.inputs}
            placeholder="Dia e Horário do Passeio"
            value={Text}
            />
            <Text style={css.txt2}>Tempo Estimado do Passeio</Text>
            <TextInput
            style={css.inputs}
            placeholder="Tempo Estimado do Passeio"
            value={Text}
            
            />
            <Text style={css.txt}>Cuidados Especiais</Text>
            <TextInput
            style={css.inputs}
            placeholder="Cuidados Especiais com Meu Pet"
            value={Text}
            />    
             <TouchableOpacity style={css.btn}>                        
                <Text style={css.btn} onPress={() => navigation.navigate('Profissional')}>Escolher Profissional</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
      height: "100%",
      backgroundColor: "#528CC5",
      alignItems: "center",
    },
    logo:{
        height:190,
        width: 300
    },
    titulo:{
        marginTop: 3,
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    subtitulo:{
        marginTop: 20,
        marginRight:280,
        color:"white"
    },
    txt:{
        marginTop:20,
        marginRight:240,
        color:"white"
    },
    txt1:{
        marginTop:20,
        marginRight:220,
        color:"white"
    },
    txt2:{
        marginTop:20,
        marginRight:190,
        color:"white"
    },
    inputs:{
        height:50,
        width:"90%",
        borderWidth: 1, 
        marginTop:5,
        padding: 10,
        borderRadius: 6,
        backgroundColor:"#DCE5E8"       
    },
    btn:{
        marginTop: 30,
        fontSize: 20,
        color: "white",
        width: 240,
        height: 40,
        backgroundColor: "#FFDE59",
        textAlign: "center",
        borderRadius: 6,
        justifyContent: "center"
    }
})