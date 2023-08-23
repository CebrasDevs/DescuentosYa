import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ShoppingCard({ sale }) {
    const totalPrice = sale.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return (<View style={styles.card}>
        <Image source={{ uri: sale.items[0].imageUrl }} style={styles.cardImage} />
        <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
            <Text style={styles.cardPrice}>Items: {sale.items.map(item => item.name ).join(", ")}</Text>
            <Text style={styles.cardState}>State: {sale.state}</Text>
            <Text style={styles.cardState}>Total: {totalPrice.toFixed(2)}</Text>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        flexDirection: "row",
        flex: 1
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignSelf: "center"
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    cardPrice: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
    cardState: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});