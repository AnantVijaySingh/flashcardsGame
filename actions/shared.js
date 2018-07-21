import {getAllDecks} from "./deck";
import {getSampleData} from "../helpers/_Data";
import {_InitializeData} from "../helpers/storage";

export function handleInitialData() {
    return (dispatch) => {
        return _InitializeData()
            .then((data) => {
                console.log('getAllDecks dispatched with data: ', data);
                dispatch(getAllDecks(JSON.parse(data)));
            })
    }
}