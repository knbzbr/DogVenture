import { Button } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Carrinho(){
    return(
        <View>
            <Text>Meu Carrinho</Text>
            <FlatList>
                
            </FlatList>




            <TextInput></TextInput>
            <Button>Calcular</Button>
        </View>
    )
}