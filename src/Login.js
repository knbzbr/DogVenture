import React, { useState } from 'react'
import { TouchableOpacity, TextInput, Keyboard, View, StyleSheet, Text, Image } from 'react-native'
import Cadastro from './Cadastro';
import { CheckBox } from 'react-native-elements';

export default function Login({setLogado, setCadastro}) {
 
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email == "" && senha == ""){
            setLogado( true );
        }
    }
    function Cadastrar()
    {
        setLogado(true);
        setCadastro(true);
    }

    return (
    <View style={css.view}>
       <Image style={css.logo}  source={require("../assets/logo.jpg")} />
        <Text style={css.texto}>Email:</Text>
        <TextInput
            onChangeText={(digitado) => setEmail(digitado)}
            value={email}
            style={css.inputs}
            placeholder="Email"

            
        />
        <Text style={css.texto}>Senha:</Text>
        <TextInput
            onChangeText={(digitado) => setSenha(digitado)}
            value={senha}
            style={css.inputs}
            placeholder="Senha"
        />
        <Text style={css.eas}>Esqueceu sua Senha?</Text>
        <View style={css.caixa}>
            <CheckBox></CheckBox>
            <Text style={css.txtlm}>Lembrar-me</Text>
        </View> 
        <TouchableOpacity onPress={Login} style={css.btn}>
            <Text style={css.txtbtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Cadastrar}>
             <Text style={css.txt}>Não é cadastrado? Faça seu Cadastro</Text>
        </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
    view:{
        width:"100%",
        height: "100%",
        flex: 1,
        backgroundColor:"#528CC5",
        alignItems:"center"
    },
    inputs:{
        width: "90%",
        height:50,
        borderWidth: 1,
        borderRadius:5,
        marginTop: 5,
        padding:10,
        backgroundColor:"#B3BABD"
    },
    logo:{
        height:300,
        width:300,
        marginLeft: 20
    },
    btn:{
        width:200,
        height:45,
        backgroundColor:"#FFDE59",
        color:"white",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 20,
        borderRadius: 7
        
    },
    texto:{
        textAlign:"left",
        marginRight:320,
        marginTop:20,
        color:"white"
    },
    eas:{
        marginRight:225,
        marginTop:5,
        color:"white"
    },
    caixa:{
        width:"100%",
        height:80,
        color:"white",
        display:'flex', 
        flexDirection:"row",
        marginLeft:15
    },
    txtbtn:{
        color:"white",
        fontSize:25
    },
    txt:{
        color:"white",
        marginTop:5 ,
    },
    mncx:{
        width:20,
        height:20,
        backgroundColor: "white",
        marginRight:330,
        marginTop:10
    },
    txtlm:{
        color:"white",
        marginTop:16,
        marginLeft: -17
    }

})