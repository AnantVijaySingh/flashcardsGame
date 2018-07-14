import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform} from 'react-native';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";

function DeckView({title, questions}) {
    return (
        <View style={styles.deck} key={title}>
            <Text style={styles.heading}>{title}</Text>
            <Text>{questions.length} Cards</Text>
        </View>
    )
}

class DeckList extends React.Component {

    renderItem = ({item}) => {
        return ( <DeckView { ...item}/>)
    };

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {

        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={Object.values(decks)}
                    renderItem={this.renderItem}
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