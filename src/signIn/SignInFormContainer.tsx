import { Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { SignInForm } from './SignInForm';
import { AuthService } from '../AuthService';

export interface SignInFormData {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email').required('This field is required'),
  password: Yup.string()
    .max(25, 'Password is too long')
    .min(6, 'Password is too short')
    .required('This field is required'),
});

interface State {
  loading: boolean;
}

export class SignInFormContainer extends React.PureComponent<{}, State> {
  state = {
    loading: false,
  };

  onSubmit = async (values: SignInFormData) => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    await AuthService.login(values.email, values.password);
    this.setState({ loading: false });
  };

  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.onSubmit} validationSchema={validationSchema}>
        {(props: FormikProps<SignInFormData>) => <SignInForm {...props} loading={this.state.loading} />}
      </Formik>
    );
  }
}
