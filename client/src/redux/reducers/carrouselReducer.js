import { 
    ADD_CARROUSEL, 
    DELETE_CARROUSEL, 
    REQUEST_CARROUSEL, 
    UPDATE_CARROUSEL,
    FETCH_CARROUSELS,
    SHOW_ERROR
} from '../actions/carrousel';

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name: null,
            description: null,
            crated_at: null,
            page: null,
            position: null
        },
    ]
}

export default function carrouselReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CARROUSEL:
            return payload.carrousel;
        case UPDATE_CARROUSEL:
            return payload.carrousel;
        case DELETE_CARROUSEL:
            return payload.carrousel;
        case SHOW_ERROR:
            return payload.carrousel;
        case REQUEST_CARROUSEL:
            return payload.carrousel;
        case FETCH_CARROUSELS:
            return payload.carrousel;
        default:
            return state;
    }
};