import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import React from 'react';

const addButton = (probs) => {
  return (
    <View style={styles.addbtn} >
      <TouchableNativeFeedback onPress={probs.onclick}>
        <View style={styles.plus}>
          <Text style={styles.addbtntext}>+</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  addbtn: {
    backgroundColor: 'cyan',
    borderRadius: 100,
    position: 'absolute',
    bottom: 25,
    right: 25,
    overflow: 'hidden',
    elevation: 4,
  },
  addbtntext: {
    fontSize: 38,
    color: 'black',
  },
  plus: {
    height: 58,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default addButton;