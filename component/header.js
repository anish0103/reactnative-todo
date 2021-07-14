import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const header = (probs) => {
    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{probs.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height: 70,
        width: '100%',
        paddingTop: 38,
        position: 'absolute',
        left: 0,
        top: 0,
        elevation: 5,
        backgroundColor: 'cyan',
        paddingLeft: 20,
        // alignItems: 'center',
    }
})

export default header;