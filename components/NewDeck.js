import React from 'react'
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

const gray = '#f0f0f0';
const black = '#262626';

class NewDeck extends React.Component {

    state = {
        input:'Name . . .'
    };

    handleTextChange = (input) => {
        this.setState({
            input
        })
    };

    handleBtnClick = () => {

    };

    render() {
        const {input} = this.state;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.heading}>
                    Create New Deck
                </Text>
                <TextInput
                    value={input}
                    style={styles.textField}
                    onChangeText={this.handleTextChange}
                    underlineColorAndroid='transparent'
                />
                {
                    Platform.OS === 'ios' ?
                        <TouchableOpacity style={styles.btn} onPress={this.handleBtnClick}>
                            <Text style={styles.btnText}>SUBMIT</Text>
                        </TouchableOpacity>
                        : <TouchableNativeFeedback
                            onPress={this.handleBtnClick}
                            background={TouchableNativeFeedback.SelectableBackground()}
                        >
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>SUBMIT</Text>
                            </View>
                        </TouchableNativeFeedback>
                }
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        alignSelf: 'stretch',
        padding: 10,
        margin: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: gray,
    },
    btn: {
        borderRadius: 2,
        backgroundColor: black,
        height: 40,
        width: 150,
        padding: 10,
        margin: 5,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default NewDeck;