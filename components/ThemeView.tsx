import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeView = ({ style, children, safe = false, ...props }) => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props}>
        {children}
      </View>
    );
  const insets = useSafeAreaInsets();

  
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemeView;
