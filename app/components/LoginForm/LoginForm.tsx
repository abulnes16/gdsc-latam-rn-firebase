import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { borders, globalStyles } from '../../theme';
import colors from '../../theme/colors';

interface Props {
  onRegister: () => void;
}

const LoginForm = ({ onRegister }: Props) => {
  return (
    <Layout style={styles.loginContainer}>
      <Input style={styles.verticalSpacing} placeholder="Email" size="large" />
      <Input
        style={styles.verticalSpacing}
        placeholder="Password"
        textContentType="password"
        size="large"
      />

      <Button size="large" style={[globalStyles.buttonColor, styles.button]}>
        Log In
      </Button>
      <View style={styles.registerAction}>
        <Text>Doesn't have an account?</Text>
        <TouchableOpacity onPress={onRegister}>
          <Text style={styles.registerText}>Create One</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 40,
    backgroundColor: colors.secondary,
    borderTopStartRadius: borders.borderRadius,
    borderTopEndRadius: borders.borderRadius,
    flex: 1,
  },
  button: {
    marginTop: 40,
  },
  verticalSpacing: {
    marginVertical: 10,
  },
  registerAction: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerText: {
    fontWeight: 'bold',
  },
});

export default LoginForm;
