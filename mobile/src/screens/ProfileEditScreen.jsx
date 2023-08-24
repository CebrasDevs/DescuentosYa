import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, Alert } from "react-native";
import { loginValidation } from "../utils/loginValidation";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import { Formik, useField } from "formik";
import useUpdateUser from "../hooks/useUpdateUser";

export default function ProfileEditScreen({ navigation }) {
  const { getProfile } = useAuth();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { updateUser } = useUpdateUser();
  async function loadUser() {
    Formik
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

  const initialValue = {
    email: user.email || "",
    password: "",
    name: user.name || "",
    phoneNumber: user.phoneNumber || ""
  };

  if (loading) { return <Loading /> } else {
    console.log(user)
  }
  const handleUpdate = async (values) => {
    await updateUser(user.id, values);
    Alert.alert("Success", "The user has been successfully updated.")
    navigation.navigate("HomeScreen");
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
          <Formik validationSchema={loginValidation} initialValues={initialValue} onSubmit={handleUpdate}>
            {({ handleSubmit }) => (
              <View style={styles.formContainer}>
                <FormikInputValue
                  name="email"
                  placeholder="E-mail"
                />
                <FormikInputValue
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <FormikInputValue
                  name="name"
                  placeholder="Name"
                />
                <FormikInputValue
                  name="phoneNumber"
                  placeholder="phone"
                />
                <Button style={styles.button} onPress={handleSubmit} title="Update" />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  button: {
    marginTop: 35,
  },
  formContainer: {
    width: "100%",
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