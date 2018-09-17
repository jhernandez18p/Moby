// import { 
//     ADD_QUESTION, 
//     DELETE_QUESTION, 
//     REQUEST_QUESTION, 
//     UPDATE_QUESTION,
//     SHOW_ERROR
// } from '../actions/questions';

// import data from '../../data';

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export default function questionsReducer (state = initialState, { type, payload }) {
    switch (type) {
        // case ADD_QUESTION:
        //     return payload.questions;
        // case UPDATE_QUESTION:
        //     return payload.questions;
        // case DELETE_QUESTION:
        //     return payload.questions;
        // case SHOW_ERROR:
        //     return payload.questions;
        // case REQUEST_QUESTION:
        //     return payload.questions;
        default:
            return state;
    }
};