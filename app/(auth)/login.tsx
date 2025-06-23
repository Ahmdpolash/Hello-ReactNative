import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Color";
import ThemedButton from "../../components/ThemeButton";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useUser } from "../../hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { login } = useUser();

  const handleSubmit = async () => {
    setError(null);

    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <Text style={styles.title}> Login to Your Account</Text>
      <Spacer height={40} />

      <ThemeTextInput
        style={{ marginBottom: 20, width: "80%" }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <ThemeTextInput
        style={{ marginBottom: 20, width: "80%" }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <ThemedButton style={{}} onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer />
      {error && <Text style={styles.error}>{error}</Text>}

      <Spacer height={100} />

      <Link href="/register" replace>
        <Text style={{ textAlign: "center" }}>Register instead</Text>
      </Link>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },

  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
    backgroundColor: "red",
  },
});
