import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF" style={styles.loadingIndicator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
        padding: 20,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
