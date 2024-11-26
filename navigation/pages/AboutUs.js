import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutUs(){
    return(
        <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor: 'black'}}>
            <View style={{display: 'flex', flexDirection: "column"}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Text style={{color: 'white', fontFamily: 'BlackOps', fontSize: 20}}>ABOUT <Text style={{textDecorationStyle: 'dashed', fontFamily: 'BlackOps', fontSize: 20}}>US</Text></Text>
                    <ArrowLeft color='white' size={25}/>
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require("../../assets/1.png")} alt="Image1" style={{borderRadius: 50}}/>
                    <Image source={require("../../assets/2.png")} alt="Image2" style={{borderRadius: 50}}/>
                    <Image source={require("../../assets/3.png")} alt="Image3" style={{borderRadius: 50}}/>
                </View>
                <Text style={{color: 'green', fontFamily: 'BlackOps', fontSize: 20}}>ESTICARB</Text>
                <Text>It is a final year project</Text>
                <View style={{position: 'absolute', bottom: 20, left: 0, right: 0, width: '100%'}}>
                    <Text style={{textAlign: 'center', width: '100%', color: 'white', fontFamily: 'PDI', fontSize: 17}}>...towards a better and sustainable environment</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}