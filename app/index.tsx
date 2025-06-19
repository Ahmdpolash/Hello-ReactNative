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
});
