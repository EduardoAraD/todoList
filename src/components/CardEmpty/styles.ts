import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderColor: colors.gray100,
    paddingHorizontal: 20,
    paddingVertical: 48,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 14,
    color: colors.gray300,
    textAlign: 'center',
  }
})
