import React from "react";
import { View, Text, Image, StyleSheet, SectionList } from "react-native";
import useFindUser from "../hooks/useFindUser";
import Loading from "../components/Loading";
import VoucherCard from "../components/VoucherCard";
import ShoppingCard from "../components/ShoppingCard";
import ItemCard from "../components/ItemCard";

export default function UserDetailScreen({ route }) {
    const { userId } = route.params;
    const { user, loading, error } = useFindUser(userId);

    if (loading) { return <Loading /> } else { console.log(JSON.stringify(user, " ", 2)) }

    const renderItem = ({ item }) => {
        if (item.type === "item") {
            return <ItemCard item={item.data} />;
        } else if (item.type === "voucher") {
            return <VoucherCard voucher={item.data} />;
        } else if (item.type === "sale") {
            return <ShoppingCard sale={item.data} />;
        };
    };

    const sections = [
        { title: "Items", quantity: user.items?.length, data: user.items.map(item => ({ type: "item", data: item })) },
        { title: "Vouchers", quantity: user.vouchers?.length, data: user.vouchers.map(voucher => ({ type: "voucher", data: voucher })) },
        { title: "Sales", quantity: user.sales?.length, data: user.sales.map(sale => ({ type: "sale", data: sale })) }
    ];


    return (
        <>{user.role === "COMPANY" ?
            (<View style={styles.container}>
                <Image source={{ uri: user.imageUrl }} style={styles.image} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>Email: {user.email}</Text>
                <Text style={styles.phoneNumber}>Phone: {user.phoneNumber}</Text>
                <Text style={styles.cuit}>CUIT: {user.cuit}</Text>
                <Text style={styles.description}>{user.description}</Text>

                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.type + index}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    renderSectionHeader={({ section: { title, quantity } }) => (
                        <View style={styles.sectionHeaders}>
                            <Text style={styles.sectionTitle}>{title}</Text>
                            <Text style={styles.sectionTitleQuantity}>{quantity}</Text>
                        </View>
                    )}
                />
            </View>
            ) : null
        }</>
    );
};

const styles = StyleSheet.create({
    sectionHeaders: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    sectionQuantity: {
        fontSize: 14,
        color: "#666",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    email: {
        fontSize: 14,
        marginBottom: 2,
    },
    phoneNumber: {
        fontSize: 14,
        marginBottom: 2,
    },
    cuit: {
        fontSize: 14,
        marginBottom: 15,
    },
    description: {
        fontSize: 14,
        marginBottom: 25,
        // textAlign: "start",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    cardImage: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 10,
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
