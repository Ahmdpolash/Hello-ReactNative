import { Text, StyleSheet } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemeButton";

export default function Profile() {
  const { logOut, user } = useUser();
  
  return (
    <ThemeView style={styles.container} safe={true}>
      <Text style={styles.heading}>Your Email : {user.email}</Text>
      {/* <Spacer /> */}

      <Text style={{ textAlign: "center" }}>
        Time to start reading some books...
      </Text>
      <Spacer />

      <ThemedButton onPress={logOut} style={{}}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
