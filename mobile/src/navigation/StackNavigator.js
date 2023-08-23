import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import UserListScreen from "../screens/UserListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "DescuentosYa!",
        headerTitleAlign: "center",
        headerStyle: styles.header,
        headerTintColor: "#333", // Color del texto y de los iconos del encabezado
        headerTitleStyle: styles.headerTitle,
      }}>
      {!isAuthenticated ?
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        : <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="UserListScreen" component={UserListScreen} />
          <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
        </>
      }
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f9f9f9", // Color de fondo del encabezado
    shadowColor: "transparent", // Elimina la sombra en Android
    elevation: 0, // Elimina la elevación en Android
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // Color del título del encabezado
  },
});