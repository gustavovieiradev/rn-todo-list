import { StyleSheet } from "react-native";
import theme from "../../../layout/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600
  },
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    paddingHorizontal: 16,
    marginTop: -30
  },
  form: {
    flexDirection: 'row',
  },
  addButton: {

  },
  input: {
    flex: 1,
    marginRight: 10
  }
})