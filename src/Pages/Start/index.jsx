import react  from "react";
import { View, Text, Image, ScrollView} from "react-native";

export default function Start() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <image source={require("../../assets/icons/logo3.png")} />
                    <Text>
                        Vamos transformar a sua vida {"/n"} em jogo, buscando sempre {"/n"}{" "} o melhor nível. 
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}