import { 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    REQUEST_PRODUCT, 
    UPDATE_PRODUCT,
    SHOW_ERROR
} from '../actions/product';

// import data from '../../data';

export default function typeReducer (state = {}, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            return payload.types;
        case UPDATE_PRODUCT:
            return payload.types;
        case DELETE_PRODUCT:
            return payload.types;
        case SHOW_ERROR:
            return payload.types;
        case REQUEST_PRODUCT:
            return payload.types;
        default:
            return state;
    }
};