import { Image, Text, View } from "react-native";

import clipboard from '../../assets/clipboard.png'
import { styles } from "./styles";

export function CardEmpty () {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <View>
        <Text style={{...styles.text, fontWeight: '700' }}>
        Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}