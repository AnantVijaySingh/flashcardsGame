import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";

class DeckList extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {

        const {decks} = this.props;

        return (
            <View>
                {
                    Object.keys(decks).map((deck) =>  (
                        <View key={decks[deck].title}>
                            <Text>{decks[deck].title}</Text>
                        </View>
                        )
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

function  mapStateToProps(state) {
    return {
        decks: state['decks']
    }
}

export default connect(mapStateToProps)(DeckList);