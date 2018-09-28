import {
    FETCH_COLORS,
    SHOW_ERROR
} from '../actions/product/color';

// import data from '../../data';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            description: null,
            hex_code: null,
            name: null,
            code: null,
        },
    ]
}

export default function colorReducer(state = initialState, { type, payload }) {
    switch (type) {
        // case ADD_COLOR:
        //     return payload.colors;
        // case AUTH_COLOR:
        //     return payload.colors;
        // case UPDATE_COLOR:
        //     return payload.colors;
        // case DELETE_COLOR:
        //     return payload.colors;
        case SHOW_ERROR:
            return payload.colors;
        // case REQUEST_COLOR:
        //     return payload.colors;
        case FETCH_COLORS:
            return payload.colors;
        default:
            return state;
    }
};