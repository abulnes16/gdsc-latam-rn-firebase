import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { globalStyles } from '../../../theme';
import { RegisterForm } from '../../../components';

const RegisterScreen = () => {
  return (
    <View style={[globalStyles.screen, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>Create an account</Text>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
