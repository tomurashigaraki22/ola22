import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.headerText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Image source={require("../../assets/1.png")} style={styles.icon} />
                <Text style={styles.optionText}>Profile</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <FontAwesome name="leaf" size={24} color="white" style={styles.icon}/>
                <Text style={styles.optionText}>Carbon sequestration cycle</Text>
                <Text style={styles.daysText}>28 days</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <MaterialIcons name="save" size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>Saved</Text>
                <Text style={styles.daysText}>6 days</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Ionicons name="time" size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>Latest</Text>
                <Text style={styles.daysText}>16 days</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <MaterialIcons name="notifications" size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>Reminder</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Ionicons name="share-social" size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>Share</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <FontAwesome name="star" size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>Rate</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 8,
        fontFamily: 'GBRBold', // Use a custom font similar to the style in the screenshot if available
    },
    option: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 16,
        borderRadius: 15, // If using a circular profile picture
    },
    optionText: {
        color: 'white',
        fontSize: 18,
        flex: 1,
        fontFamily: 'GBR', // Use a custom font similar to the style in the screenshot if available
    },
    daysText: {
        color: 'white',
        fontSize: 14,
    },
});
