import { View, Text, Image, StyleSheet } from "react-native";

export default function  Local(){
    return(
        <View>
            <Image style={css.mapa} source={require("../assets/mapa.jpg")}></Image>
        </View>
    )
}
const css = StyleSheet.create({
    mapa:{
        width: "100%",
        height: "100%",
    }
})
