import { 
    ADD_PROVIDER, 
    DELETE_PROVIDER, 
    REQUEST_PROVIDER, 
    UPDATE_PROVIDER,
    SHOW_ERROR
} from '../actions/product/providers';

// import data from '../../data';

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export default function providerReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PROVIDER:
            return payload.providers;
        case UPDATE_PROVIDER:
            return payload.providers;
        case DELETE_PROVIDER:
            return payload.providers;
        case SHOW_ERROR:
            return payload.providers;
        case REQUEST_PROVIDER:
            return payload.providers;
        default:
            return state;
    }
};