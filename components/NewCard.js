import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, TouchableNativeFeedback, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from "react-navigation";

const gray = '#f0f0f0';
const gray2 = '#8f8f8f';
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
        let ques = this.state.questionText;
        let ans = this.state.answerText;


        //Prevent user from submitting default values
        if(ques !== quesText && ans !== ansText) {
            // Dispatch action to add question to the deck
        }

        this.setState({
            questionText: quesText,
            answerText: ansText
        });
    };

    render() {

        const {questionText, answerText} =  this.state;
        let disabled = this.state.questionText === quesText || this.state.answerText === ansText;
        console.log(disabled);

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.heading}>
                    Add New Question
                </Text>
                <TextInput
                    value={questionText}
                    style={styles.textField}
                    onChangeText={this.handleQuesTextChange}
                    underlineColorAndroid='transparent'
                    selectTextOnFocus={true}
                />
                <TextInput
                    value={answerText}
                    style={styles.textField}
                    onChangeText={this.handleAnsTextChange}
                    underlineColorAndroid='transparent'
                    selectTextOnFocus={true}
                />
                {
                    Platform.OS === 'ios' ?
                        <TouchableOpacity style={styles.btn} onPress={this.handleBtnClick} disabled={disabled}>
                            <Text style={styles.btnText}>SUBMIT</Text>
                        </TouchableOpacity>
                        : <TouchableNativeFeedback
                            onPress={this.handleBtnClick}
                            background={TouchableNativeFeedback.SelectableBackground()}
                            disabled={disabled}
                        >
                            <View style={disabled ? styles.androidDisabled : styles.btn}>
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
        margin: 10,
        elevation: 5
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    androidDisabled: {
        borderRadius: 2,
        backgroundColor: gray2,
        height: 40,
        width: 150,
        padding: 10,
        margin: 10
    }
});

export default connect()(NewCard);