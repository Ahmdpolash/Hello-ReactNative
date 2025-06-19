import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import ThemeView from "../components/ThemeView";
import ThemeLogo from "../components/ThemeLogo";
import { Link } from "expo-router";

const Home = () => {
  return (
    <ThemeView style={[styles.container]}>
      <Text>Home page</Text>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Button title="Native Button" />
        <Pressable
          style={[styles.customBtn, { marginLeft: 10, borderRadius: 10 }]}
        >
          <Text style={{ color: "white" }}>Custom Button</Text>
        </Pressable>
        <TouchableHighlight
          style={[styles.customBtn, { marginLeft: 10, borderRadius: 10 }]}
        >
          <Text style={{ color: "white" }}>Touchable Button</Text>
        </TouchableHighlight>
      </View>
      <ThemeLogo style={{ marginTop: 20 }} />

      <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
        <Link href="/login" style={styles.link}>
          <Text>Login</Text>
        </Link>

        <Link href="/register" style={styles.link}>
          <Text>Register</Text>
        </Link>
      </View>
    </ThemeView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customBtn: {
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "red",
    color: "white",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    cursor: "pointer",
  },
});
