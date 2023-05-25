import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
    paddingBottom: 10,
  },
  containerButton: {
    marginRight: 24,
    marginLeft: 24,
    height: 54,
    marginTop: -27,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.purpleDark,
    backgroundColor: colors.gray500,
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    color: colors.gray100
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: colors.blueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  viewTask: {
    padding: 24,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.gray100
  },
})
