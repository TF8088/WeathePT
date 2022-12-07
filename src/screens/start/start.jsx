import { View, Text, Image } from "react-native";
import style from "./start-style";
import { getCords } from "../../components/location";

export function Start() {
     getCords();
    return (
        <View style={style.container}>
            <Image source={require('../../assets/weatherlogonoback.png')} style={style.logo} />
            <Text style={style.logoText}>
                Portugal Weather
            </Text>
        </View>
    )
}