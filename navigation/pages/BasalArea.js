import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BasalAreaScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>BASAL AREA</Text>
                <Ionicons name="arrow-back" size={24} color="white" />
            </View>
            {["Per Tree", "Per Plot", "Per Hectare", "Per Strata"].map((text, index) => (
                <TouchableOpacity key={index} style={styles.option}>
                    <Text style={styles.optionText}>{text}</Text>
                </TouchableOpacity>
            ))}
            <Text style={styles.moreText}>more than one variable?</Text>
            <TouchableOpacity style={styles.exportButton}>
                <Text style={styles.buttonText}>EXPORT</Text>
            </TouchableOpacity>
            <View style={styles.fileButtons}>
                <TouchableOpacity style={styles.csvButton}>
                    <Text style={styles.fileButtonText}>CSV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fileButton}>
                    <Text style={styles.fileButtonText}>FILE</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
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
    moreText: {
        color: '#FF7F50',
        textAlign: 'center',
        marginVertical: 10,
    },
    exportButton: {
        alignSelf: 'center',
        backgroundColor: '#FF7F50',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    fileButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    csvButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    fileButton: {
        backgroundColor: '#006400',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    fileButtonText: {
        color: 'white',
        fontSize: 16,
    },
    nextButton: {
        alignSelf: 'center',
        backgroundColor: 'lightgreen',
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 8,
    },
    nextText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        color: '#FF7F50',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
    },
});
