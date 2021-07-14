import { StyleSheet, View , Modal} from 'react-native';
import React from 'react';
import Header from './header';

import InputContainer from './inputContainer';

const addModel = (probs) => {
    return (
        <Modal statusBarTranslucent={true} animationType='slide' visible={probs.visible}>
            <View>
                <Header title={'Add'}/>
            </View>
            <InputContainer onPress={probs.handler} inputhandler={probs.inputhandler} />
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default addModel;