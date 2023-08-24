import React from "react";
import { Formik, useField } from "formik";
import { Button, TextInput, Text, View, StyleSheet, Image } from "react-native";
import { loginValidation } from "../utils/loginValidation";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";

import BackgroundImage from "../../assets/logo.png";

export default function LoginScreen({ navigation }) {
    const { login, loading, error } = useAuth();

    const initialValue = {
        email: "",
        password: ""
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

    async function handleLogin(values) {
        const access = await login(values);
        if (access) navigation.navigate("HomeScreen");
    };

    if (loading) return <Loading />;

    return (<>
        {error && (
            <Text style={styles.errorText}>Error: Invalid credentials. Please check your email and password.</Text>
        )}
        <View style={styles.container}>
            <Image source={BackgroundImage} style={styles.backgroundImage} />
            <Text style={styles.logo}>DescuentosYa!</Text>
            <Formik validationSchema={loginValidation} initialValues={initialValue} onSubmit={handleLogin}>
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
                        <Button onPress={handleSubmit} title="Log In" />
                    </View>
                )}
            </Formik>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: 160,
        height: 160,
        borderRadius: 100,
        alignSelf: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    logo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#8241e8",
        marginBottom: 20,
    },
    formContainer: {
        width: "100%",
    },
    inputContainer: {
        marginBottom: 25,

    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: "white",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginTop:20
    },
});
