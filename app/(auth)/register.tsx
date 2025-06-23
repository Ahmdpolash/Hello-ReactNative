import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

import Spacer from "../../components/Spacer";
import ThemeView from "../../components/ThemeView";
import ThemedButton from "../../components/ThemeButton";
import { useState } from "react";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Color";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register, user } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
      // console.log("current user is: ", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemeView style={styles.container}>
        <Spacer />
        <Text style={styles.title}>Register an Account</Text>

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
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        {/* <Spacer height={10} /> */}

        {/* <Spacer height={100} /> */}
        <Link href="/login" replace>
          <Text style={{ textAlign: "center" }}>Login instead</Text>
        </Link>
      </ThemeView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});
