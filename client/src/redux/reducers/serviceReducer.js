import { 
    ADD_SERVICE, 
    DELETE_SERVICE, 
    REQUEST_SERVICE, 
    UPDATE_SERVICE,
    SHOW_ERROR
} from '../actions/service';

const initialState = {
    id: 0,
    name:null,
    title:null,
    content:null,
    slug:null,
    image:null,
    featured:null,
    position:null,
    background:null,
}

export default function serviceReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_SERVICE:
            return payload.service;
        case UPDATE_SERVICE:
            return payload.service;
        case DELETE_SERVICE:
            return payload.service;
        case SHOW_ERROR:
            return payload.service;
        case REQUEST_SERVICE:
            return payload.service;
        default:
            return state;
    }
};