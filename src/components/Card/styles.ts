import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width:  '100%',
    backgroundColor: colors.gray400,
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 8,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderColor: colors.blueDark,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: colors.gray100,
  },
  textLineT: {
    flex: 1,
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: colors.gray300,
  },
  touch: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
