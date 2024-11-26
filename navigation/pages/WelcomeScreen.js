import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function WelcomeScreen(){
    const navigation = useNavigation()

    useEffect(() => {
        const navNow = async () => {
            setTimeout(() => {
                navigation.navigate("HomeScreen")
            }, 4000)
        }
        navNow()
    }, [navigation])
    return(
        <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
            <View style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', color: 'white', fontFamily: 'BlackOps', fontSize: 20}}>WELCOME</Text>
                <Text style={{textAlign: 'center', color: 'white', fontFamily: 'BlackOps', fontSize: 20}}>TO</Text>
                <Text style={{textAlign: 'center', color: 'red', fontFamily: 'BlackOps', fontSize: 20}}>ESTICARB</Text>
            </View>
        </SafeAreaView>
    )
}