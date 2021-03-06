import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import reducer from './reducers';
import middleware from './middleware';
import {createStore} from 'redux';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Deck from './components/Deck';
import NewCard from './components/NewCard';
import Quiz from './components/Quiz';
import {setLocalNotification} from "./helpers/notificationHelper";
import {Constants} from 'expo';

const purple = '#292477';
const gray = '#f0f0f0';
const white = '#fff';

const store = createStore(reducer,middleware);

function FlashcardStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

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

const TabsAndroid = createMaterialBottomTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <FontAwesome name='file' size={20} color={tintColor}/>
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Create',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={20} color={tintColor}/>
        }
    }
}, {
    barStyle: { backgroundColor: purple },
    navigationOptions: {header: null}
});

const Stack = createStackNavigator({
    Home: {
        screen: Platform.OS === 'ios' ? TabsiOS : TabsAndroid,
        navigationOptions: {
            header: null
        }
    },
    Deck: {
        screen: Deck,
        // Note to self: navigationOptions can be passed function that allow getting data passed via navigate method in the component, in this case it's the name of the deck
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.deckTitle} Deck`,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        })
    },
    NewCard: {
        screen: NewCard,
        // Note to self: navigationOptions can be passed function that allow getting data passed via navigate method in the component, in this case it's the name of the deck
        navigationOptions: ({ navigation }) => ({
            title: 'Create Card',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        })
    },
    Quiz: {
        screen: Quiz,
        // Note to self: navigationOptions can be passed function that allow getting data passed via navigate method in the component, in this case it's the name of the deck
        navigationOptions: ({ navigation }) => ({
            title: 'Quiz Mode',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        })
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
    },
});

export default class App extends React.Component{

    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <FlashcardStatusBar backgroundColor={purple} barStyle='light-content'/>
                    <Stack/>
                </View>
            </Provider>
        );
    }
}
