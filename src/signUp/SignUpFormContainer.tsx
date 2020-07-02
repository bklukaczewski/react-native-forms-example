import { Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { SignUpForm } from './SignUpForm';
import { AuthService } from '../AuthService';
import { Alert } from 'react-native';

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email').required('This field is required'),
  password: Yup.string()
    .max(25, 'Password is too long')
    .min(6, 'Password is too short')
    .required('This field is required'),
  confirmPassword: Yup.string()
    .max(25, 'Password is too long')
    .min(6, 'Password is too short')
    .required('This field is required'),
});

interface State {
  loading: boolean;
}

export class SignUpFormContainer extends React.PureComponent<{}, State> {
  state = {
    loading: false,
  };

  onSubmit = async (values: SignUpFormData) => {
    if (this.state.loading) {
      return;
    }
    if (values.confirmPassword !== values.password) {
      Alert.alert('Password does not match');
      return;
    }
    this.setState({ loading: true });
    await AuthService.signUp(values.email, values.password, values.confirmPassword);
    this.setState({ loading: false });
  };

  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.onSubmit} validationSchema={validationSchema}>
        {(props: FormikProps<SignUpFormData>) => <SignUpForm {...props} loading={this.state.loading} />}
      </Formik>
    );
  }
}
