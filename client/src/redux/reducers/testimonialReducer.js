import { 
    ADD_TESTIMONIAL,
    DELETE_TESTIMONIAL,
    REQUEST_TESTIMONIAL,
    SHOW_ERROR,
    UPDATE_TESTIMONIAL,
    FETCH_TESTIMONIAL,
} from '../actions/testimonial';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            company: null,
            description: null,
            img: null,
            name: null,
        }
    ]
}

export default function testimonialsReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TESTIMONIAL:
            return payload.testimonials;
        case UPDATE_TESTIMONIAL:
            return payload.testimonials;
        case DELETE_TESTIMONIAL:
            return payload.testimonials;
        case SHOW_ERROR:
            return payload.testimonials;
        case REQUEST_TESTIMONIAL:
            return payload.testimonials;
        case FETCH_TESTIMONIAL:
            return payload.testimonials;
        default:
            return state;
    }
};