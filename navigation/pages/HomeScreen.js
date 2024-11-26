import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, Image, StyleSheet, Settings, TouchableOpacity } from "react-native";
import { CalendarList } from "react-native-calendars";
import { Bell, Calendar, Calendar1, Clock, FolderOpen, Home, Settings2, SettingsIcon, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
    const [currentMonth, setCurrentMonth] = useState("NOVEMBER 2024");

    const handleMonthChange = (months) => {
        if (months && months.length > 0) {
            const month = months[0].month;
            const year = months[0].year;
            setCurrentMonth(`${new Date(year, month - 1).toLocaleString('default', { month: 'long' }).toUpperCase()} ${year}`);
        }
    };
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.greetingText}>Hi, </Text>
                    <Text style={styles.username}>Ehikowoicho</Text>
                    <Bell color="white" size={24} style={styles.bellIcon} />
                </View>
                <View style={styles.calendarContainer}>
                    <View style={styles.calendarHeader}>
                        <Calendar color="white" size={16} />
                        <Text style={styles.calendarMonth}>{currentMonth}</Text>
                    </View>
                    <CalendarList
                        horizontal
                        pagingEnabled
                        pastScrollRange={0}
                        futureScrollRange={0}
                        style={styles.calendar}
                        onVisibleMonthsChange={handleMonthChange}
                        theme={{
                            backgroundColor: "green",
                            calendarBackground: "green",
                            dayTextColor: "white",
                            todayTextColor: "green",
                            selectedDayBackgroundColor: "white",
                            selectedDayTextColor: "black",
                            monthTextColor: "white",
                        }}
                        markedDates={{
                            "2024-11-09": { selected: true },
                            "2024-11-16": { selected: true },
                            "2024-11-23": { selected: true },
                        }}
                    />
                </View>
                <Text style={styles.sectionTitle}>Last carbon stock estimated</Text>
                <View style={styles.infoCard}>
                    <Clock color="black" size={16} />
                    <Text style={styles.infoText}>Started April 27</Text>
                    <Text style={styles.daysAgoText}>16 days ago</Text>
                </View>
                <View style={styles.infoCard}>
                    <Clock color="black" size={16} />
                    <Text style={styles.infoText}>Carbon stock: 5 days</Text>
                    <Text style={styles.status}>Saved</Text>
                </View>
                <View style={styles.infoCard}>
                    <FolderOpen color="black" size={16} />
                    <Text style={styles.infoText}>Project creation</Text>
                    <Text style={styles.status}>Saved</Text>
                </View>
                <Image source={require("../../assets/mht.png")} style={styles.bannerImage} />
                
            </ScrollView>
            <View style={styles.footer}>
                    <View style={styles.navIcon}>
                        <Home color='white' size={30} style={{alignSelf: 'center'}}/>
                    </View>
                    <View style={styles.navIcon}>
                        <Calendar1 color='white' size={30} style={{alignSelf: 'center'}}/>
                    </View>
                    <View style={styles.navIcon}>
                        <SettingsIcon color='white' size={30} style={{alignSelf: 'center'}}/>
                    </View>
                    <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("Profile")}>
                        <User color='white' size={30} style={{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollView: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        marginTop: 15
    },
    greetingText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    username: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
    },
    bellIcon: {
        marginLeft: 'auto',
    },
    calendarContainer: {
        width: '90%',
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    calendarMonth: {
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    calendar: {
        borderRadius: 10,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        marginBottom: 10,
    },
    infoText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    daysAgoText: {
        marginLeft: 'auto',
        color: 'white',
        fontSize: 12,
    },
    status: {
        marginLeft: 'auto',
        color: 'white',
        fontSize: 12,
    },
    bannerImage: {
        width: '90%',
        height: 120,
        borderRadius: 10,
        marginVertical: 20,
        marginBottom: 40
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        borderTopColor: 'green',
        borderWidth: 2,
        borderRadius: 0
    },
    navIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
    profileIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
});
