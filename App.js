import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import ProdutoLoja from './src/ProdutoLoja';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import CadastroPasseio from "./src/CadastroPasseio";
import Profissional from "./src/Profissional";
import Local from "./src/Local";



const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false);
  const [cadastro, setCadastro] = useState(false);
  const [cadastroPasseio, setCadastroPasseio] = useState(false);

  if (!logado) {
    return (<Login setLogado={setLogado} setCadastro={setCadastro} />)
  }
  if (cadastro) {
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} setCadastroPasseio={setCadastroPasseio} />)
  }
  if (cadastroPasseio) {
    return (<CadastroPasseio setCadastro={setCadastro} setLogado={setLogado} setCadastroPasseio={setCadastroPasseio} />)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#FFDE59" },
          headerStyle: { backgroundColor: "#FFDE59", height: 50 },
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profissional"
          component={Profissional}
          options={{
            tabBarLabel: 'Profissional',
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle-outline" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Local"
          component={Local}
          options={{
            tabBarLabel: 'Local',
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map-marker-outline" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Loja"
          component={ProdutoLoja}
          options={{
            tabBarLabel: 'Loja',
            tabBarLabelStyle: {color:"black"},
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="store-outline" color= "black" size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const css = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
})
