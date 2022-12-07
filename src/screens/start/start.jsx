import { View, Text, Image } from "react-native";
import style from "./start-style";

export function start() {
    <View style={style.container}>
        <Image source={require('../../assets/weatherlogo.png')} style={style.logo} />
        <Text style={style.logoText}>
            Portugal Weather
        </Text>
    </View>
}