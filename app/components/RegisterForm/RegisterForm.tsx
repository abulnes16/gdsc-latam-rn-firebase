import React from 'react';
import { Layout, Input, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { borders, globalStyles } from '../../theme';
import colors from '../../theme/colors';

const RegisterForm = () => {
  return (
    <Layout style={styles.registerForm}>
      <Input style={globalStyles.verticalSpacing} placeholder="Name" />
      <Input style={globalStyles.verticalSpacing} placeholder="Email" />
      <Input
        style={globalStyles.verticalSpacing}
        textContentType="password"
        placeholder="Password"
      />
      <Button style={[globalStyles.buttonColor, styles.button]}>
        Register
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  registerForm: {
    backgroundColor: colors.secondary,
    borderRadius: borders.borderRadius,
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  button: {
    marginTop: 30,
  },
});

export default RegisterForm;
