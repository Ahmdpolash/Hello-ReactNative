import { Text, StyleSheet } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";

export default function Profile() {
  return (
    <ThemeView style={styles.container} safe={true}>
      <Text style={styles.heading}>Your Email</Text>
      {/* <Spacer /> */}

      <Text style={{ textAlign: "center" }}>
        Time to start reading some books...
      </Text>
      <Spacer />
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
