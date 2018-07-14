import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import {handleInitialData} from "./actions/shared";
import reducer from './reducers';
import middleware from './middleware';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const store = createStore(reducer,middleware);

export default class App extends React.Component{

  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <DeckList/>
            </View>
        </Provider>
    );
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
