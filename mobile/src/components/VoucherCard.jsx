import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function VoucherCard({ voucher, role }) {
    return (
        <>{role==="COMPANY" ? 
            <View style={styles.card}>
                <Image source={{ uri: voucher.item.imageUrl }} style={styles.cardImage} />
                <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
                    <Text style={styles.cardTitle}>{voucher.item.name}</Text>
                    <Text style={styles.cardMember}>Member: {voucher.user.name}</Text>
                    <Text style={styles.cardPrice}>Expiration: {voucher.expirationDate}</Text>
                </View>
            </View>
            :
            <View style={styles.card}>
                <Image source={{ uri: voucher.item.imageUrl }} style={styles.cardImage} />
                <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
                    <Text style={styles.cardTitle}>{voucher.item.name}</Text>
                    <Text style={styles.cardMember}>Company: {voucher.company.name}</Text>
                    <Text style={styles.cardPrice}>Expiration: {voucher.expirationDate}</Text>
                    <Text style={styles.cardPrice}>Discount: {voucher.item.discount} %</Text>
                </View>
            </View>}
        </>
    )
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
    cardMember: {
        fontSize: 14,
        textAlign: "center"
    },
    cardPrice: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});