import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Color";
import ThemedButton from "../../components/ThemeButton";

export default function Login() {
  const handleSubmit = async () => {
    Alert.alert("Hey this is polash");
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <Text style={styles.title}> Login to Your Account</Text>
      <Spacer height={100} />

      <ThemedButton style={{}} onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

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
