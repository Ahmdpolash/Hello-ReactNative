import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";

export default function Login() {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <Text style={styles.title}> Login to Your Account</Text>
      <Spacer height={100} />

      <Link href="/register">
        <Text style={{ textAlign: "center" }}>Register instead</Text>
      </Link>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
