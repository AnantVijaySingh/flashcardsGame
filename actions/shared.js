import {getAllDecks} from "./deck";
import {_InitializeData} from "../helpers/storage";

export function handleInitialData() {
    return (dispatch) => {
        return _InitializeData()
            .then((data) => {
                dispatch(getAllDecks(JSON.parse(data)));
            })
    }
}