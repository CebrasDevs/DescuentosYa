import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono de FontAwesome o el paquete que desees

export default function Card({ id, name, email, enabled, userDetail }) {
    const handlePress = () => {
        userDetail(id);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
                <View style={styles.enabledContainer}>
                    <Icon
                        name={enabled ? "toggle-on" : "toggle-off"}
                        size={12}
                        color={enabled ? "blue" : "grey"}
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "#666",
    },
    enabledContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    enabledText: {
        fontSize: 14,
        marginRight: 6,
    },
    icon: {
        fontSize: 18,
    },
});
