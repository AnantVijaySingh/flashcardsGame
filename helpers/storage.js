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
    console.log('Initialized Data Called');

    // return AsyncStorage.clear()
    //     .then(() => console.log('All data cleared'));

    return AsyncStorage.getItem(KEY)
        .then((value) => getInitialData(value))
}

function getInitialData(value) {

    console.log(value);

    if(value === null) {
        AsyncStorage.setItem(KEY,JSON.stringify(sampleData))
            .catch((err) => console.log('error saving data', err));
    }

    return value === null
        ? JSON.stringify(sampleData)
        : AsyncStorage.getItem(KEY).then((value) => {
            console.log('data found');
            return value})
}


export function _storeNewDeckChanges(title) {
    console.log('storeChanges called', title);

    AsyncStorage.mergeItem(KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}






// export function _InitializeData() {
//     setTimeout(() => {
//         console.log('Initialized Data Called');
//
//         // AsyncStorage.clear()
//         //     .then(() => console.log('All data cleared'));
//
//         AsyncStorage.getItem(KEY, (err, result) => {console.log('getItem called', result)})
//             .then((value) => {
//                 if (value!==null) {
//                     console.log('Data found');
//                     console.log(value);
//                     return value
//                 } else {
//                     console.log('No data found');
//                     console.log('Data to store is: ', sampleData);
//                     AsyncStorage.setItem(KEY, JSON.stringify(sampleData))
//                         .then(() => {return data})
//                         .catch((err) => {alert('Storage issue: ' + err)})
//                 }
//             })
//     }, 5000)
// }