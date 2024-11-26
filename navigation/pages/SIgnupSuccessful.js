import { Check } from "lucide-react-native";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

export default function SignupSuccessful() {
    const navigation = useNavigation(); // Initialize navigation

    useEffect(() => {
        const navToLogin = async () => {
            navigation.navigate("Welcome")
        }
        navToLogin()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Check color="green" size={80} style={styles.icon} />
                <Text style={styles.successText}>Signup Successful</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    icon: {
        marginBottom: 20,
    },
    successText: {
        color: "white",
        fontFamily: "BlackOps",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 30,
    },
    loginButton: {
        backgroundColor: "green",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "center",
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
        fontFamily: "BlackOps",
    },
});
