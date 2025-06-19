import { View, Text, useColorScheme, Image } from "react-native";

import light from "../assets/ligth.png";
import dark from "../assets/dark.png";

export default function ThemeLogo({...props}) {
  const theme = useColorScheme();
  const logo = theme === "dark" ? dark : light;

  return (
    <View>
          <Image source={logo} {...props} />
    </View>
  );
}
