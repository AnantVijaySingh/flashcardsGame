import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";

class DeckList extends React.Component {

    componentDidMount() {
        // AsyncStorage.clear()
        //     .then(() => {
        //         // TODO: only to test startup loading of sample data
        //         console.log('cleared keys');
        //         this.props.dispatch(handleInitialData());
        //     })

        this.props.dispatch(handleInitialData());
    }

    render() {

        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={Object.values(decks)}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={styles.deck}
                            key={item.title}
                            onPress={() => this.props.navigation.navigate(
                                'Deck',
                                {deckTitle: item.title}
                            )}>
                            <Text style={styles.heading}>{item.title}</Text>
                            <Text>{item.questions.length} Cards</Text>
                        </TouchableOpacity>}
                    keyExtractor={(item) => item.title}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        alignSelf: 'stretch'
    },
    deck: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 150,
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding:20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    heading: {
        fontSize: 24,
        fontWeight:'bold',
    }
});

function  mapStateToProps(state) {
    return {
        decks: state['decks']
    }
}

export default connect(mapStateToProps)(DeckList);