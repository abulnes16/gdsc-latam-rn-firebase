import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks';
import { borders, globalStyles } from '../../theme';
import colors from '../../theme/colors';

interface Inputs {
  email: string;
  password: string;
}
interface Props {
  onRegister: () => void;
}

const LoginForm = ({ onRegister }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { login } = useAuth();

  const signIn = (data: Inputs) => {
    // TODO: Integrate firebase auth
    console.log(data);
    login(data);
  };

  return (
    <Layout style={styles.loginContainer}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            textContentType="emailAddress"
            style={globalStyles.verticalSpacing}
            value={value}
            onChangeText={onChange}
            placeholder="Email"
          />
        )}
      />
      {errors.email && (
        <Text style={globalStyles.errorText}>The email is required</Text>
      )}
      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            style={globalStyles.verticalSpacing}
            textContentType="password"
            secureTextEntry
            placeholder="Password"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={globalStyles.errorText}>The password is required</Text>
      )}
      <Button
        size="large"
        style={[globalStyles.buttonColor, styles.button]}
        onPress={handleSubmit(signIn)}>
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
