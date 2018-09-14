import {
    ADD_IMAGES_CARROUSEL,
    DELETE_IMAGES_CARROUSEL,
    REQUEST_IMAGES_CARROUSEL,
    UPDATE_IMAGES_CARROUSEL,
    FETCH_IMAGES_CARROUSELS,
    SHOW_ERROR
} from '../actions/carrousel/images';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            image: null,
            name: null,
            text: null,
            uploaded_at: null,
            Carousel: null,
            call_to_action_url: null,
        },
    ]
}

export default function imgCarrouselReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_IMAGES_CARROUSEL:
            return payload.img_carrousel;
        case UPDATE_IMAGES_CARROUSEL:
            return payload.img_carrousel;
        case DELETE_IMAGES_CARROUSEL:
            return payload.img_carrousel;
        case REQUEST_IMAGES_CARROUSEL:
            return payload.img_carrousel;
        case FETCH_IMAGES_CARROUSELS:
            return payload.img_carrousel;
        case SHOW_ERROR:
            return payload.img_carrousel;
        default:
            return state;
    }
};