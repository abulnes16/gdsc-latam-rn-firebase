import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  buttonColor: {
    backgroundColor: colors.terciary,
    borderColor: colors.terciary,
  },
  text: {
    color: colors.white,
  },
  verticalSpacing: {
    marginVertical: 10,
  },
});
