import {AsyncStorage} from 'react-native';

const KEY = 'Flashcard:Data';

let sampleData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};


export function _InitializeData() {
    return AsyncStorage.getItem(KEY)
        .then((value) => getInitialData(value))
}

function getInitialData(value) {
    if(value === null) {
        AsyncStorage.setItem(KEY,JSON.stringify(sampleData))
            .catch((err) => console.log('error saving data', err));
    }

    return value === null
        ? JSON.stringify(sampleData)
        : AsyncStorage.getItem(KEY).then((value) => {
            return value})
}


export function _storeNewDeckChanges(title) {
    AsyncStorage.mergeItem(KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function _storeNewCardChanges(title, ques, ans, questionsArray) {
    AsyncStorage.mergeItem(KEY, JSON.stringify({
        [title]: {
            questions: [...questionsArray, {question: ques, answer: ans}]
        }
    }))
}
