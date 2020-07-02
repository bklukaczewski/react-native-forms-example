import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Colors } from './src/styles';
import { SignInFormContainer } from './src/signIn/SignInFormContainer';
import { SignUpFormContainer } from './src/signUp/SignUpFormContainer';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <SignInFormContainer />
          <SignUpFormContainer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.background,
    flexGrow: 1,
    paddingHorizontal: 16,
  },
});

export default App;
