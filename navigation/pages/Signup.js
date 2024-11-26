import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomCheckBox = ({ isChecked, onPress }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
            {isChecked && <Text style={styles.checkmark}>✔</Text>}
        </View>
    </TouchableOpacity>
);

export default function Signup() {
    const navigation = useNavigation()
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1, display: 'flex' }}>
                <Text style={{ color: 'white', fontFamily: "BlackOps", fontSize: 24 }}>SIGN UP</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="First Name" placeholderTextColor='gray' style={styles.input} keyboardType="default"/>
                    <TextInput placeholder="Last Name" placeholderTextColor='gray' style={styles.input} keyboardType="default"/>
                    <TextInput placeholder="Profession" placeholderTextColor='gray' style={styles.input} keyboardType="default"/>
                    <TextInput placeholder="Nationality" placeholderTextColor='gray' style={styles.input} keyboardType="default"/>
                    <TextInput placeholder="Email Address" placeholderTextColor='gray' style={styles.input} keyboardType="email-address"/>
                    <TextInput placeholder="Phone Number" placeholderTextColor='gray' style={styles.input} keyboardType="phone-pad"/>
                    <TextInput placeholder="Password" placeholderTextColor='gray' style={styles.input} secureTextEntry />
                    <TextInput placeholder="Confirm Password" placeholderTextColor='gray' style={styles.input} secureTextEntry />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 10, paddingHorizontal: 10 }}>
                    <CustomCheckBox isChecked={isChecked} onPress={() => setIsChecked(!isChecked)} />
                    <Text style={{ color: 'white', marginLeft: 10, textAlign: 'center', fontFamily: 'GBRBold' }}>
                        By clicking on sign up, you're agreeing to <Text style={{color: 'green', fontFamily: 'GBRBold', fontSize: 16}}>ESTICARB's</Text> Terms of Service
                    </Text>
                </View>
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor: 'white', borderRadius: 30, borderWidth: 1, borderColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("CreateProject")}>
                    <Text style={{alignSelf: 'center', textAlign: 'center', color: 'green', fontFamily: 'BlackOps', fontSize: 15, paddingHorizontal: 15, paddingVertical: 10}}>SIGN UP</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        marginTop: 10,
        fontFamily: 'GBRBold',
        fontSize: 17,
        backgroundColor: 'white'
    },
    checkboxContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: 'green',
    },
    checkmark: {
        color: 'white',
        fontSize: 18,
        lineHeight: 18,
    },
});
