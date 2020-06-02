import {SEARCH_CHANGE, searchChange} from "./actions";

const initialState ={
    term: "",
};

 export default function searchReducer(state = initialState, action) {
    switch (action.type){
        case SEARCH_CHANGE:
            return { term: action.search };
        default:
            return state;
    }
};