import { 
    ADD_TYPE, 
    DELETE_TYPE, 
    REQUEST_TYPE, 
    UPDATE_TYPE,
    SHOW_ERROR
} from '../actions/product/type';

// import data from '../../data';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            name: null,
            code: null
        }
    ]
}

export default function typeReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TYPE:
            return payload.types;
        case UPDATE_TYPE:
            return payload.types;
        case DELETE_TYPE:
            return payload.types;
        case SHOW_ERROR:
            return payload.types;
        case REQUEST_TYPE:
            return payload.types;
        default:
            return state;
    }
};