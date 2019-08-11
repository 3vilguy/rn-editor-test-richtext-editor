import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
var HBRichTextEditor = require('react-native-richtext-editor');
var HBToolbar = require('react-native-richtext-editor/HBToolbar');

export default function App() {
  return (
    <View style={styles.container}>
      <HBRichTextEditor
        ref="myEditor"
        initialHTML={"bodyForDisplay"} />
      <HBToolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
