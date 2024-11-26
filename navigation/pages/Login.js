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

export default function Login() {
    const navigation = useNavigation()
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ color: 'white', fontFamily: "BlackOps", fontSize: 24 }}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Name" 
                        placeholderTextColor="gray" 
                        style={styles.input} 
                        keyboardType="default" 
                    />
                    <TextInput 
                        placeholder="Password" 
                        placeholderTextColor="gray" 
                        style={styles.input} 
                        secureTextEntry 
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <CustomCheckBox isChecked={isChecked} onPress={() => setIsChecked(!isChecked)} />
                    <Text style={{ color: 'white', marginLeft: 10 }}>Remember Me</Text>
                </View>
                <TouchableOpacity style={{ marginBottom: 20 }}>
                    <Text style={{ color: 'green', fontFamily: 'GBRBold' }}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginButton} onPress={() => navigation.navigate("LoginSuccess")}>
                    <Text style={styles.loginText}>LOGIN</Text>
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
    loginButton: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    loginText: {
        color: 'green',
        fontFamily: 'BlackOps',
        fontSize: 15,
        textAlign: 'center',
    },
});
