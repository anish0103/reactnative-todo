import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const item = (Probs) => {
    const removeitem = () => {
        Probs.removeitem(Probs.id, Probs.index);
    }

    return (
        <View style={{alignItems: 'center'}} >
            <View style={styles.container} >
                <Text onPress={removeitem} testID={Probs.id} style={{ fontSize: 19, fontWeight: 'bold'}}>{Probs.title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: 'grey',
        borderRadius: 15,
        borderWidth: 2,
        marginVertical: 5,
        width: '80%',
    }
})

export default item;