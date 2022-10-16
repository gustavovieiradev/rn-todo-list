import { StyleSheet } from "react-native";
import theme from "../../../layout/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 21,
    alignItems: 'center',
    borderTopColor: theme.colors.gray400,
    borderTopWidth: 1,
    paddingVertical: 48
  },
  title: {
    marginTop: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray300
  },
  description: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray300
  }
})