import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const username = (probs) => {
    const [input, setinput] = useState();

    const inputvalue = (value) => {
        setinput(value);
    }

    const inputhandler = () => {
        if (input === undefined) {
            return Alert.alert('Warning!!!', 'Please Enter some value!!!', [{ text: 'OK', style: 'cancel' }])
        }
        probs.usernamehandler(input);
    }

    return (
        <TouchableWithoutFeedback onPress={() => (Keyboard.dismiss())} >
            <View style={styles.container} >
                <Text style={{ fontSize: 73, fontWeight: 'bold', color: 'black' }} >Welcome</Text>
                <View style={styles.input} >
                    <TextInput placeholder='Enter Your UserName' textAlign='center' color='black' onChangeText={inputvalue} value={input} style={styles.ip} />
                </View>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity onPress={inputhandler} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Go</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginTop: 50
    },
    input: {
        padding: 12,
        marginTop: 62,
        borderColor: 'grey',
        borderRadius: 15,
        borderWidth: 2,
        width: '80%'

    },
    ip: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn: {
        flexDirection: 'row',
        paddingVertical: 22,
        width: '60%',
        justifyContent: 'center'
    },
    appButtonContainer: {
        elevation: 3,
        backgroundColor: "cyan",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: 85,
    },
    appButtonText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default username;