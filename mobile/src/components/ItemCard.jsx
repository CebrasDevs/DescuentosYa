import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ItemCard({ item }) {
    return (<View style={styles.card} >
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft:20 }}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>Discount: {item.discount} %</Text>
            {item.price !== 0 && (<Text style={styles.cardPrice}>Price: ${item.price}</Text>)}
        </View>
    </View>)
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
        borderRadius:50,
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
});

