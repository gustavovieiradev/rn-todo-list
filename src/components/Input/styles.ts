import { StyleSheet } from "react-native";
import theme from "../../../layout/theme";

export const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderColor: theme.colors.gray700,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.lg,
    color: theme.colors.gray100
  },
})