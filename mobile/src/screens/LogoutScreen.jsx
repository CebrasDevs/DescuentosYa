import React from "react";
import { View, Text } from "react-native";

export default function LogoutScreen({ navigation }) {
  return (
    <View>
      <Text>Logout screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};