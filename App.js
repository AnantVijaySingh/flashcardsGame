import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import {handleInitialData} from "./actions/shared";
import reducer from './reducers';
import middleware from './middleware';
import {createStore} from 'redux';


const store = createStore(reducer,middleware);

export default class App extends React.Component{

  componentDidMount() {
      console.log('step 1');
      store.dispatch(handleInitialData());
  }

  render() {
    return (
      <View style={styles.container}>
        <DeckList/>
      </View>
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
