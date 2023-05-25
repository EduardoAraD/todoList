import { Image, View } from "react-native";
import { styles } from "./styles";

import logo from '../../assets/Logo.png'

export function LogoView(){
  return (
    <View style={styles.container}>
      <Image source={logo}  />
    </View>
  )
}
