import {getAllDecks} from "./deck";
import {getSampleData} from "../helpers/_Data";

export function handleInitialData() {
    return (dispatch) => {
        return getSampleData()
            .then((sampleData) => {
                dispatch(getAllDecks(sampleData));
            })
    }
}