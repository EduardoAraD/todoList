import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewNumber: {
    height: 19,
    width: 25,
    borderRadius: 999,
    backgroundColor: colors.gray400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray200,
  },
})
