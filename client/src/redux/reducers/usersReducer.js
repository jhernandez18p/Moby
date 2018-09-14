import { 
    ADD_USER, 
    AUTH_USER, 
    DELETE_USER, 
    INVALIDATE_USER, 
    REQUEST_USER, 
    UPDATE_USER,
    SHOW_ERROR
} from '../actions/userActions';

// import data from '../../data';

export default function usersReducer (state = {}, { type, payload }) {
    switch (type) {
        case ADD_USER:
            return payload.users;
        case AUTH_USER:
            return payload.users;
        case UPDATE_USER:
            return payload.users;
        case DELETE_USER:
            return payload.users;
        case SHOW_ERROR:
            return payload.users;
        case REQUEST_USER:
            return payload.users;
        case INVALIDATE_USER:
            return payload.users;
        default:
            return state;
    }
};