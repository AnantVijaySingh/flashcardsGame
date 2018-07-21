import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const gray = '#f0f0f0';
const gray2 = '#8f8f8f';
const black = '#262626';

class Quiz extends React.Component {

    state = {
        index: 0,
        side: 'ques', // side can be 'ques' or 'ans' depending on the weather the user is reading the question or checking the answer,
        score: 0,
        status: 'quiz', // status can be 'quiz' or 'result' which would determine is questions/answers are displayed or the quiz has ended and the result is to be displayed
    };

    handleCheckAnsBtnClick = () => {
        this.setState({
            side: 'ans'
        })
    };

    handleRightBtnClick = () => {

        if (this.state.index === this.props.decks[this.props.navigation.state.params.deckTitle].questions.length - 1) {
            // Trigger logic to end quiz and show result
            this.setState((prevState) => ({
                status:'result',
                score:  prevState.score + 1
            }));
        } else {
            this.setState((prevState) => ({
                index: prevState.index + 1,
                side: 'ques',
                score: prevState.score + 1,
            }))
        }
    };

    handleWrongBtnClick = () => {

        if (this.state.index === this.props.decks[this.props.navigation.state.params.deckTitle].questions.length - 1) {
            // Trigger logic to end quiz and show result
            this.setState({
                status:'result'
            })
        }

        this.setState((prevState) => ({
            index: prevState.index + 1,
            side: 'ques',
        }))
    };

    handleFinishBtnClick = () => {
        this.props.navigation.goBack();
    };

    handleRestartBtnClick = () => {
        this.setState(() => ({
            index: 0,
            side: 'ques',
            score: 0,
            status: 'quiz',
        }))
    };

    render() {

        const {questions} = this.props.decks[this.props.navigation.state.params.deckTitle];

        if(this.state.status === 'quiz') {
            return (
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.heading}>
                            {this.state.side === 'ques' ? 'Question' : 'Answer'}
                        </Text>
                        <Text style={styles.subHeading}>
                            {this.state.side === 'ques' ? questions[this.state.index].question : questions[this.state.index].answer}
                        </Text>
                        {
                            this.state.side === 'ques' ?
                                <TouchableOpacity style={styles.btn} onPress={this.handleCheckAnsBtnClick}>
                                    <Text style={styles.btnText}>Check Answer</Text>
                                </TouchableOpacity> :
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={styles.btn2} onPress={this.handleRightBtnClick}>
                                        <Text style={styles.btnText}>Right</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn2} onPress={this.handleWrongBtnClick}>
                                        <Text style={styles.btnText}>Wrong</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
                    <Text style={styles.bottom}>Question: {this.state.index + 1} of {questions.length}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.heading}>
                            Score
                        </Text>
                        <Text style={styles.subHeading}>
                            { Math.round((this.state.score / questions.length)*100)} percent
                        </Text>
                        <TouchableOpacity style={styles.btn} onPress={this.handleRestartBtnClick}>
                            <Text style={styles.btnText}>Restart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={this.handleFinishBtnClick}>
                            <Text style={styles.btnText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        alignSelf: 'center',
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
        margin: 5
    },
    subHeading: {
        fontSize: 16,
        margin: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn2: {
        borderRadius: 2,
        backgroundColor: black,
        height: 40,
        width: 100,
        padding: 10,
        margin: 10,
        elevation: 5
    },
    bottom: {
        fontSize: 10,
        height: 15
    }
});

function mapStateToProps(state) {
    return {
        decks: state['decks']
    }
}

export default connect(mapStateToProps)(Quiz);