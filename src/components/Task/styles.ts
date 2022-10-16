import { StyleSheet } from "react-native";
import theme from "../../../layout/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray500,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 64,
  },
  textContent: {
    flex: 0.9,
    color: theme.colors.gray100,
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular
  },
})