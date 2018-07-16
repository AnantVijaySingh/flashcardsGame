import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, TouchableNativeFeedback, KeyboardAvoidingView} from 'react-native';

const gray = '#f0f0f0';
const black = '#262626';

const quesText = 'Question...';
const ansText = 'Answer...';

class NewCard extends React.Component {

    state = {
        questionText: quesText,
        answerText: ansText
    };

    handleQuesTextChange = (input) => {
        this.setState({
            questionText: input
        })
    };

    handleAnsTextChange = (input) => {
        this.setState({
            answerText: input
        })
    };

    handleBtnClick = () => {
      // Dispatch action to add question to the deck
    };

    render() {

        const {questionText, answerText} =  this.state;

        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.heading}>
                    Add New Question
                </Text>
                <TextInput
                    value={questionText}
                    style={styles.textField}
                    onChangeText={this.handleTextChange}
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    value={answerText}
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

export default NewCard;