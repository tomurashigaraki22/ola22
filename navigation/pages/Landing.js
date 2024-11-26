import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landing() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', height: '100%', width: '100%' }}>
            <View style={{ backgroundColor: 'black', flex: 1, padding: 20, height: '100%', width: '100%', marginTop: 10 }}>
                <Text style={{ fontFamily: 'BlackOps', fontSize: 19, color: "white", textAlign: 'left' }}>Hi There!</Text>
                <View style={{ alignItems: 'center', marginVertical: 20, justifyContent: 'center', display: 'flex', marginTop: 100 }}>
                    <Text style={{ fontFamily: 'BlackOps', fontSize: 16, color: 'white' }}>Interested in carbon stock estimation!!!</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <TouchableOpacity style={{ marginRight: 15, backgroundColor: 'green', borderRadius: 30, paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => navigation.navigate("Signup")}>
                            <Text style={{ fontFamily: 'BlackOps', fontSize: 13, color: 'white' }}>SIGNUP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 30, paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => navigation.navigate("Login")}>
                            <Text style={{ fontFamily: 'BlackOps', fontSize: 13, color: 'white' }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 14, color: 'white' }}>
                        with <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 17 }}>ESTICARB</Text> to get informed
                    </Text>
                </View>
                <View style={{ position: 'fixed', bottom: 0, width: '100%', left: 0, right: 0}}>
                    <Text style={{ fontSize: 12, color: 'white', textAlign: 'center', marginTop: 30, marginBottom: 20 }}>{"<--------------------- powered by --------------------->"}</Text>
                    <View style={{width: '70%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center'}}>
                        <Image source={require("../../assets/1.png")} alt="Image1" style={{borderRadius: 50}}/>
                        <Image source={require("../../assets/2.png")} alt="Image2" style={{borderRadius: 50}}/>
                        <Image source={require("../../assets/3.png")} alt="Image3" style={{borderRadius: 50}}/>
                    </View>

                    <Text style={{fontFamily: 'BlackOps', fontSize: 16, color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 15}}>About Us</Text>

                    <Text style={{textAlign: 'center', width: '100%', color: 'white', fontFamily: 'PDI', fontSize: 16}}>...towards a better and sustainable environment</Text>
                
                    </View>
                </View>
        </SafeAreaView>
    );
}
