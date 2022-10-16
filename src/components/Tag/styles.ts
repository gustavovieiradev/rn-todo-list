import { StyleSheet } from "react-native";
import theme from "../../../layout/theme";

export const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray400
  },
  count: {
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray200
  }
})