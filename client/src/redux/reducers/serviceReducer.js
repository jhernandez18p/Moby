import { 
    ADD_SERVICE, 
    DELETE_SERVICE, 
    REQUEST_SERVICE, 
    UPDATE_SERVICE,
    FETCH_SERVICES,
    SHOW_ERROR
} from '../actions/service';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name:null,
            title:null,
            content:null,
            slug:null,
            image:null,
            featured:null,
            position:null,
            background:null,
        },
    ]
}

export default function serviceReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_SERVICE:
            return payload.services;
        case UPDATE_SERVICE:
            return payload.services;
        case DELETE_SERVICE:
            return payload.services;
        case SHOW_ERROR:
            return payload.services;
        case REQUEST_SERVICE:
            return payload.services;
        case FETCH_SERVICES:
            return payload.services;
        default:
            return state;
    }
};