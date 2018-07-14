import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import reducer from './reducers';
import middleware from './middleware';
import {createStore} from 'redux';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation'

const purple = '#292477';
const gray = '#f0f0f0';
const white = '#fff';
const red = '#b71845';
const orange = '#f26f28';
const blue = '#4e4cb8';
const lightPurp = '#7c53c3';
const pink = '#b93fb3';

const store = createStore(reducer,middleware);

const TabsiOS = createBottomTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-clipboard' size={30}  color={tintColor}/>
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Create',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-create' size={30}  color={tintColor}/>
        }
    }
},
    {   navigationOptions: {
            header: null,
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    });

const TabsAndroid = createMaterialTopTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Create',
        }
    }
});

export default class App extends React.Component{
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                {Platform.OS === 'ios' ? <TabsiOS/> : <TabsAndroid/>}
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
});
