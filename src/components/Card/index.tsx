import { Image, Text, TouchableOpacity, View } from "react-native";
import Checkbox from 'expo-checkbox';

import trash from '../../assets/trash.png'
import { styles } from "./styles";
import { colors } from "../../assets/colors";

type Props = {
  id: number
  isCheck: boolean
  name: string
  onChangeCheck: (value: boolean, id: number) => void
  onRemoveTask: (id: number, name: string) => void;
}

export function Card({ isCheck, name, onChangeCheck, id, onRemoveTask }: Props) {

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isCheck} 
        onValueChange={(value) => onChangeCheck(value, id)}
        color={isCheck ? colors.blueDark : undefined}
      />
      <Text
        style={isCheck ? styles.textLineT : styles.text}
      >{name}</Text>
      <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.7}
        onPress={() => onRemoveTask(id, name)}
      >
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  )
}