import React from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, Text, View } from 'react-native';

import { Colors, Typography } from '../styles';

interface Props extends TextInputProps {
  label: string;
  error?: string;
  touched?: boolean;
}

export class InputItem extends React.PureComponent<Props> {
  render() {
    const { label, error, touched, style } = this.props;
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <BaseTextInput {...this.props} style={[styles.input, style]} />
        </View>
        <View style={styles.errorContainer}>
          {!!error && touched && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    ...Typography.label,
    marginBottom: 4,
  },
  inputContainer: {
    height: 44,
    borderRadius: 4,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  input: {
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 16,
    ...Typography.input,
  },
  errorContainer: {
    height: 26,
    justifyContent: 'center',
  },
  error: {
    ...Typography.error,
  },
});
