import React from "react";
import { View, Text, Image, StyleSheet, SectionList, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono de FontAwesome o el paquete que desees
import useFindUser from "../hooks/useFindUser";
import Loading from "../components/Loading";
import VoucherCard from "../components/VoucherCard";
import ShoppingCard from "../components/ShoppingCard";
import ItemCard from "../components/ItemCard";
import useUpdateUser from "../hooks/useUpdateUser";

export default function UserDetailScreen({ route, navigation }) {
    const { userId } = route.params;

    let { user, loading, error } = useFindUser(userId);

    const { updateUser, loading: loadingUpdate } = useUpdateUser()

    if (loading || loadingUpdate) return <Loading />

    const renderItem = ({ item }) => {
        if (item.type === "item") {
            return <ItemCard item={item.data} />;
        } else if (item.type === "voucher") {
            return <VoucherCard voucher={item.data} role={user.role} />;
        } else if (item.type === "sale") {
            return <ShoppingCard sale={item.data} role={user.role} />;
        };
    };

    let sections = [];
    if (user.role === "COMPANY") {
        sections = [
            { title: "Items", quantity: user.items?.length, data: user.items.map(item => ({ type: "item", data: item })) },
            { title: "Vouchers", quantity: user.vouchers?.length, data: user.vouchers.map(voucher => ({ type: "voucher", data: voucher })) },
            { title: "Sales", quantity: user.sales?.length, data: user.sales.map(sale => ({ type: "sale", data: sale })) }
        ];
    } else {
        sections = [
            { title: "Vouchers", quantity: user.vouchers?.length, data: user.vouchers.map(voucher => ({ type: "voucher", data: voucher })) },
            { title: "Shopping", quantity: user.shoppings?.length, data: user.shoppings.map(sale => ({ type: "sale", data: sale })) }
        ]
    };


    const handleEnableUser = async () => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to enable this user?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Enable",
                    onPress: async () => {
                        user = await updateUser(user.id, { enabled: true });
                        Alert.alert("Success", "The user has been successfully disabled.");
                        navigation.navigate("HomeScreen")
                    }
                }
            ]
        );
    };

    const handleDisableUser = () => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to disable this user?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Disable",
                    onPress: async () => {
                        user = await updateUser(user.id, { enabled: false });
                        Alert.alert("Success", "The user has been successfully disabled.");
                        navigation.navigate("HomeScreen")
                    }
                }
            ]
        );
    };

    return (
        <>
            <View style={styles.buttonContainer}>
                {user.enabled ? (
                    <Icon
                        name="toggle-on"
                        size={24}
                        color="blue"
                        onPress={handleDisableUser}
                    />
                ) : (
                    <Icon
                        name="toggle-off"
                        size={24}
                        color="grey"
                        onPress={handleEnableUser}
                    />
                )}
            </View>
            {user.role === "COMPANY" ?
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
                                <Text style={styles.sectionQuantity}>{quantity}</Text>
                            </View>
                        )}
                    />
                </View>
                ) : (
                    <View style={styles.container}>
                        <Image source={{ uri: user.imageUrl }} style={styles.image} />
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>Email: {user.email}</Text>
                        <Text style={styles.phoneNumber}>Phone: {user.phoneNumber}</Text>
                        <Text style={styles.dni}>DNI: {user.dni}</Text>

                        <SectionList
                            sections={sections}
                            keyExtractor={(item, index) => item.type + index}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                            renderSectionHeader={({ section: { title, quantity } }) => (
                                <View style={styles.sectionHeaders}>
                                    <Text style={styles.sectionTitle}>{title}</Text>
                                    <Text style={styles.sectionQuantity}>{quantity}</Text>
                                </View>
                            )}
                        />
                    </View>)
            }</>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 10,
        marginRight: 50
    },
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
