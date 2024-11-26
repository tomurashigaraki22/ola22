import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { View, ActivityIndicator, Text } from "react-native";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import LoginSuccessful from "./pages/LoginSuccessful";
import SignupSuccessful from "./pages/SIgnupSuccessful";
import WelcomeScreen from "./pages/WelcomeScreen";
import AboutUs from "./pages/AboutUs";
import DashboardScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ProjectCreationScreen from "./pages/ProjectCreation";
import DerivedInformationScreen from "./pages/DerivedInfo";
import AboveGroundBiomassScreen from "./pages/AboveGroundBiomass";
import CarbonStock from "./pages/CarbonStock";
import CO2EquivalentScreen from "./CO2Equivalent";

export default function AppNav() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [loadingError, setLoadingError] = useState(null);  // For handling any loading errors

    const Stack = createStackNavigator();

    // Load fonts using expo-font's useFonts hook
    const [fontsLoaded, error] = useFonts({
        "PDI": require("../assets/fonts/pdi.ttf"),
        "GBRBold": require("../assets/fonts/gbrbold.ttf"),
        "BlackOps": require("../assets/fonts/boor.ttf"),
        "GBR": require("../assets/fonts/gbr.ttf"),
    });

    useEffect(() => {
        if (error) {
            console.error("Error loading fonts:", error);  // Logs the error for debugging
            setLoadingError(`Error loading fonts: ${error.message}`);
        } else if (fontsLoaded) {
            // When fonts are loaded successfully
            setAppIsReady(true);
        }
    }, [fontsLoaded, error]);  // Run the effect when fontsLoaded or error changes

    // Show loading spinner or error message
    if (!appIsReady || loadingError) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {loadingError ? (
                    <Text style={{ color: "red" }}>{loadingError}</Text>  // Show error if loading fails
                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="LoginSuccess" component={LoginSuccessful} options={{ headerShown: false }} />
                <Stack.Screen name="SignupSuccess" component={SignupSuccessful} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={DashboardScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false}}/>
                <Stack.Screen name="CreateProject" component={ProjectCreationScreen} options={{ headerShown: false}}/>
                <Stack.Screen name="DerivedInfo" component={DerivedInformationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="AboveGround" component={AboveGroundBiomassScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="CarbonStock" component={CarbonStock} options={{ headerShown:false}}/>
                <Stack.Screen name="CO2Equivalent" component={CO2EquivalentScreen} options={{ headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
