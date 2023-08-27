import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useFetchUsers from "../hooks/useFetchUsers";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function UsersScreen({ navigation }) {
    const { users, loading } = useFetchUsers();

    function userDetail(userId) {
        return navigation.navigate("UserDetailScreen", { userId: userId });
    }

    const companyUsers = users.filter(user => user.role === "COMPANY");
    const memberUsers = users.filter(user => user.role === "MEMBER");
    
    if (loading) return <Loading />

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { title: "Company Users", data: companyUsers },
                    { title: "Member Users", data: memberUsers },
                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.section}>
                        <Text style={styles.title}>{item.title}</Text>
                        <FlatList
                            data={item.data}
                            keyExtractor={user => user.id.toString()}
                            renderItem={({ item }) => <Card {...item} userDetail={userDetail} />}
                        />
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    section: {
        padding: 16,
        marginBottom: 40,
        borderColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign:"center"
    },
    listContainer: {
        marginTop: 8,
    },
});
