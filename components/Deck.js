import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import NewCard from './NewCard';
import {setLocalNotification, clearLocalNotifications} from "../helpers/notificationHelper";

const black = '#262626';

class Deck extends React.Component {

    handleCardBtnClick = () => {
        this.props.navigation.navigate(
            'NewCard',
            {deckTitle: this.props.navigation.state.params.deckTitle}
        )
    };

    handleQuizBtnClick = () => {
        this.props.navigation.navigate(
            'Quiz',
            {deckTitle: this.props.navigation.state.params.deckTitle}
        );

        // clear notifications for today and set them up for the next day
        clearLocalNotifications()
            .then(setLocalNotification);
    };

    render() {

        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>{decks[this.props.navigation.state.params.deckTitle].title}</Text>
                <Text style={styles.subHeading}>{decks[this.props.navigation.state.params.deckTitle].questions.length} Cards</Text>
                <TouchableOpacity style={styles.btn} onPress={this.handleCardBtnClick}>
                    <Text style={styles.btnText}>Add Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} onPress={this.handleQuizBtnClick}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight:'bold',
    },
    subHeading: {
        fontSize: 18,
        padding: 10
    },
    btn: {
        borderRadius: 2,
        backgroundColor: black,
        height: 40,
        width: 150,
        padding: 10,
        margin: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

function mapStateToProps(state) {
    return {
        decks: state['decks']
    }
}

export default connect(mapStateToProps)(Deck);