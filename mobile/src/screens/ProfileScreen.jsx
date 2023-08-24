import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProfileScreen({ navigation }) {
  const { getProfile } = useAuth();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const data = await getProfile();
      setUser(data);
      console.log(JSON.stringify(data, " ", 2))
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (loading) { return <Loading /> } else {
    console.log(user)
  }
  const handleEdit = () => {
    navigation.navigate("ProfileEditScreen")
  }
  return (
    <>
      <View style={styles.buttonContainer}>
        <Icon
          name="edit"
          size={24}
          color="blue"
          onPress={handleEdit}
        />
      </View >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userRole}>{user.role}</Text>
          <Text style={styles.userInfo}>Email: {user.email}</Text>
          <Text style={styles.userInfo}>Phone: {user.phoneNumber}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 50
  },
  goBackText: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 20,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userRole: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});