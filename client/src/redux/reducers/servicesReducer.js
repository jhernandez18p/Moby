import { 
    FETCH_SERVICES,
    SHOW_SERVICES_ERROR
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
        case SHOW_SERVICES_ERROR:
            return payload.services;
        case FETCH_SERVICES:
            return payload.services;
        default:
            return state;
    }
};