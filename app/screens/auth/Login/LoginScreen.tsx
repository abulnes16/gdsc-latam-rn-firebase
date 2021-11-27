import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { LoginForm } from '../../../components';
import { LoginScreenProps } from '../../../@types/navigation';
import { REGISTER_SCREEN } from '../../../navigation/screen-name';

interface Props extends LoginScreenProps {}

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GDSC Latam Conference</Text>
      </View>
      <LoginForm onRegister={() => navigation.navigate(REGISTER_SCREEN)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: 40,
  },
  titleContainer: { flex: 1.2, justifyContent: 'center' },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});

export default LoginScreen;
