// import { 
//     ADD_ANSWER, 
//     DELETE_ANSWER, 
//     REQUEST_ANSWER, 
//     UPDATE_ANSWER,
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

export default function answerReducer (state = initialState, { type, payload }) {
    switch (type) {
        // case ADD_ANSWER:
        //     return payload.answer;
        // case UPDATE_ANSWER:
        //     return payload.answer;
        // case DELETE_ANSWER:
        //     return payload.answer;
        // case SHOW_ERROR:
        //     return payload.answer;
        // case REQUEST_ANSWER:
        //     return payload.answer;
        default:
            return state;
    }
};