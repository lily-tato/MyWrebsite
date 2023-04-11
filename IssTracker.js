import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class IssLocationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>IssLocationScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems:'center'
  },
});
