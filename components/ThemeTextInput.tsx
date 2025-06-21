import { View, Text, useColorScheme, TextInput } from "react-native";
import React from "react";
import { Colors } from "../constants/Color";

export default function ThemeTextInput({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
}
