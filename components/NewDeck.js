import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

class NewDeck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    New Deck
                </Text>
            </View>
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
});

export default NewDeck;