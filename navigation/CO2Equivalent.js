import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CO2EquivalentScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>CO₂ EQUIVALENT</Text>
            <View style={styles.optionContainer}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Per Tree</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Per Plot</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Per Hectare</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Per Strata</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.moreText}>more than one variable?</Text>
            <Text style={styles.exportText}>EXPORT</Text>
            <View style={styles.fileButtons}>
                <TouchableOpacity style={styles.csvButton}>
                    <Text style={styles.fileButtonText}>CSV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fileButton}>
                    <Text style={styles.fileButtonText}>FILE</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saveProjectButton}>
                <Text style={styles.saveProjectText}>SAVE PROJECT</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>...towards a better and sustainable environment...</Text>
        </ScrollView>
    );
};

export default CO2EquivalentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backText: {
        color: 'white',
        fontSize: 30,
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    optionContainer: {
        marginVertical: 20,
    },
    optionButton: {
        backgroundColor: '#D3D3D3',
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 5,
    },
    optionText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
    },
    moreText: {
        color: 'gray',
        textAlign: 'center',
        marginVertical: 10,
    },
    exportText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
    },
    fileButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    csvButton: {
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    fileButton: {
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    fileButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    saveProjectButton: {
        alignSelf: 'center',
        backgroundColor: 'lightgreen',
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 20,
    },
    saveProjectText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footerText: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 20,
    },
});
