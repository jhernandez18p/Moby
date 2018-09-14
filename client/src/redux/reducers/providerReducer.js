import { 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    REQUEST_PRODUCT, 
    UPDATE_PRODUCT,
    SHOW_ERROR
} from '../actions/product';

// import data from '../../data';

export default function providerReducer (state = {}, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            return payload.providers;
        case UPDATE_PRODUCT:
            return payload.providers;
        case DELETE_PRODUCT:
            return payload.providers;
        case SHOW_ERROR:
            return payload.providers;
        case REQUEST_PRODUCT:
            return payload.providers;
        default:
            return state;
    }
};