import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from "./src/components/header";

import Form from "./src/components/form"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Header />
        <View style={{
          flex: 1,
          padding: 20
        }}>
          <Form />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

