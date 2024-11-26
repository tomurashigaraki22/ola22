import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProjectCreationScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Get started</Text>
                <Ionicons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()}/>
            </View>
            <Text style={styles.subtitle}>Input your field data</Text>
            <TextInput style={styles.input} placeholder="Title of Project" placeholderTextColor="white" />
            {["Diameter at the base", "Diameter at the middle", "Diameter at the top", 
              "Diameter at breast height", "Merchantable height"].map((placeholder, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                />
            ))}
            <Text style={styles.orText}>OR</Text>
            <TextInput style={styles.input} placeholder="Basal area" placeholderTextColor="white" />
            <TextInput style={styles.input} placeholder="Tree volume" placeholderTextColor="white" />
            <Text style={styles.moreText}>more than one variable?</Text>
            <TouchableOpacity style={styles.importButton}>
                <Text style={styles.buttonText}>IMPORT</Text>
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
                <Text style={styles.nextText}>NEXT</Text>
            </TouchableOpacity>
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
        color: '#FF7F50', // Coral color for subtitle
        fontSize: 16,
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#333',
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 8,
        fontSize: 16,
    },
    orText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
    },
    moreText: {
        color: '#FF7F50',
        textAlign: 'center',
        marginVertical: 10,
    },
    importButton: {
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
});
