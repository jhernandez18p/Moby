import { 
    ADD_SUB_LINE, 
    DELETE_SUB_LINE, 
    REQUEST_SUB_LINE, 
    UPDATE_SUB_LINE,
    FETCH_SUB_LINES,
    SHOW_ERROR
} from '../actions/product/subLine';

// import data from '../../data';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            description: null,
            img: null,
            name: null,
            code: null,
            parent: null,
        },
    ]
}

export default function subLineReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_SUB_LINE:
            return payload.sub_lines;
        case UPDATE_SUB_LINE:
            return payload.sub_lines;
        case DELETE_SUB_LINE:
            return payload.sub_lines;
        case SHOW_ERROR:
            return payload.sub_lines;
        case REQUEST_SUB_LINE:
            return payload.sub_lines;
        case FETCH_SUB_LINES:
            return payload.sub_lines;
        default:
            return state;
    }
};