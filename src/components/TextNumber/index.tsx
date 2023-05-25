import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string
  color: string
  value: number
}

export function TextNumber({ color, name, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: color }}>{name}</Text>
      <View style={styles.viewNumber}>
        <Text style={styles.textNumber}>{value}</Text>
      </View>
    </View>
  )
}