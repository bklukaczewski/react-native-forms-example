import { FormikProps } from 'formik';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SignInFormData } from './SignInFormContainer';
import { InputItem, Button } from '../components';
import { Typography } from '../styles';

interface Props extends FormikProps<SignInFormData> {
  loading?: boolean;
}

export class SignInForm extends React.PureComponent<Props> {
  render() {
    const { handleChange, handleBlur, values, handleSubmit, errors, touched, loading } = this.props;
    return (
      <View>
        <Text style={styles.title}>Sign in</Text>
        <InputItem
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          blurOnSubmit
        />

        <InputItem
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          touched={touched.password}
          label="Password"
          secureTextEntry
          textContentType="password"
          blurOnSubmit
        />

        <Button onPress={handleSubmit} title={loading ? '...' : 'Sign in'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    ...Typography.title,
    marginBottom: 16,
    marginTop: 12,
  },
});
