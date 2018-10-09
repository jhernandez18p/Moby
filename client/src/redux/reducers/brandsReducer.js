import { 
    ADD_BRAND, 
    DELETE_BRAND, 
    REQUEST_BRAND, 
    UPDATE_BRAND,
    SHOW_ERROR,
    FETCH_BRANDS, 
} from '../actions/brand';

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
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export default function brandsReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BRAND:
            return payload.brands;
        case UPDATE_BRAND:
            return payload.brands;
        case DELETE_BRAND:
            return payload.brands;
        case SHOW_ERROR:
            return payload.brands;
        case REQUEST_BRAND:
            return payload.brands;
        case FETCH_BRANDS:
            return payload.brands;
        default:
            return state;
    }
};