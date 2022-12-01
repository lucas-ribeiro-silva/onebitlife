import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DeafultButton from "../../Components/Common/DefaultButton";

export default function AppExplanation (){
    function handleSetShowHome() {
        console.log("Botão cliclado");
    }
    return (
        <View style={StyleSheet.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}/>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.description}>
                        Pronto (a) para subir de nível na vida? 
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de forma individual.
                    </Text>    
                    <DeafultButton buttonText={"Continuar"} handlePress={handleSetShowHome} width={250} height={50}/>
            </ScrollView>
         </View>   
    );
}

const styles = StyleSheet.creater ({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        MarginBottom: 10,
    },
    description: {
        color: "white",
        textAlign: "white",
        MarginBottom: 30,

    },
})
