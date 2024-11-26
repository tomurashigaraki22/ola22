import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DerivedInformationScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Derived</Text>
                <Ionicons name="arrow-back" size={24} color="white" />
            </View>
            <Text style={styles.subtitle}>Information</Text>
            {["Select Species", "No of Plot", "Plot Size", "Species Density", 
              "Biomass expansion factor (BEF)", "Below Ground Biomass Constant", 
              "BASAL AREA", "VOLUME", "ABOVE GROUND BIOMASS", "BELOW GROUND BIOMASS", 
              "CARBON STOCK", "CO₂EQUIVALENT"].map((text, index) => (
                <TouchableOpacity key={index} style={styles.option}>
                    <Text style={styles.optionText}>{text}</Text>
                </TouchableOpacity>
            ))}
            <Text style={styles.footerText}>...towards a better and sustainable environment...</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FF7F50',
        fontSize: 16,
        marginVertical: 10,
    },
    option: {
        backgroundColor: '#333',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 8,
    },
    optionText: {
        color: 'white',
        fontSize: 16,
    },
    footerText: {
        color: '#FF7F50',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
    },
});
