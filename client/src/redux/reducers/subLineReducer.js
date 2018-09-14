import { 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    REQUEST_PRODUCT, 
    UPDATE_PRODUCT,
    SHOW_ERROR
} from '../actions/product';

// import data from '../../data';

export default function subLineReducer (state = {}, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            return payload.sublines;
        case UPDATE_PRODUCT:
            return payload.sublines;
        case DELETE_PRODUCT:
            return payload.sublines;
        case SHOW_ERROR:
            return payload.sublines;
        case REQUEST_PRODUCT:
            return payload.sublines;
        default:
            return state;
    }
};