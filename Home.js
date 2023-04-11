import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    justifyContent:'center',
    alignItems:'center'
  },
});
