import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity , Alert} from 'react-native';
import React, { useState } from 'react';

const inputContainer = (probs) => {
    const [input, setinput] = useState();

    const inputvalue = (value) => {
        setinput(value);
    }

    const inputhandler = () => {
        if (input === undefined) {
            return Alert.alert('Warning!!!', 'Please Enter some value!!!', [{ text: 'OK', style: 'cancel' }])
        }
        probs.inputhandler(input);
    }

    return (
        <TouchableWithoutFeedback onPress={() => (Keyboard.dismiss())} >
            <View style={styles.container} >
                <View style={styles.input} >
                    <TextInput placeholder='Enter Your Content' onChangeText={inputvalue} value={input} style={styles.ip} />
                </View>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity onPress={inputhandler} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={probs.onPress} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Cancel</Text>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 12,
        borderColor: 'grey',
        borderRadius: 15,
        borderWidth: 2,
        width: '80%',
    },
    ip: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn: {
        flexDirection: 'row',
        paddingVertical: 22,
        width: '60%',
        justifyContent: 'space-between'
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

export default inputContainer;