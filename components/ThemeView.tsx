import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Color";

const ThemeView = ({ style, children, ...props }) => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemeView;
