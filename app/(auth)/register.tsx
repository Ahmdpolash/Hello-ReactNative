import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import Spacer from "../../components/Spacer";
import ThemeView from "../../components/ThemeView";

const Register = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <Text style={styles.title}>Register an Account</Text>

      <Spacer height={100} />
      <Link href="/login" replace>
        <Text style={{ textAlign: "center" }}>Login instead</Text>
      </Link>
    </ThemeView>
  );
};

export default Register;

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
