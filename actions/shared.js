import {getAllDecks} from "./deck";
import {getSampleData} from "../helpers/_Data";

export function handleInitialData() {
    console.log('step 2');
    return (dispatch) => {
        return getSampleData()
            .then((sampleData) => {
                dispatch(getAllDecks(sampleData));
            })
    }
}