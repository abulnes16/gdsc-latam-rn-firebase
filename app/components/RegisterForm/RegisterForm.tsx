import React from 'react';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { borders, globalStyles } from '../../theme';
import colors from '../../theme/colors';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../hooks';

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { register, loading } = useAuth();

  const createAccount = (data: Inputs) => {
    // TODO: Integrate firebase auth create user
    console.log(data);
    register(data);
  };

  return (
    <Layout style={styles.registerForm}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            style={globalStyles.verticalSpacing}
            value={value}
            onChangeText={onChange}
            placeholder="Name"
          />
        )}
      />
      {errors.name && (
        <Text style={globalStyles.errorText}>The name is required</Text>
      )}
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
      {loading ? (
        <ActivityIndicator color={colors.terciary} size="large" />
      ) : (
        <Button
          style={[globalStyles.buttonColor, styles.button]}
          onPress={handleSubmit(createAccount)}>
          Register
        </Button>
      )}
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
