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
  input: {
    flex: 1,
    marginRight: 10
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    // paddingBottom: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: theme.colors.gray500
  },
  labelCriadas: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.blue,
    marginRight: 8
  },
  labelConcluida: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
    marginRight: 8
  },
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})