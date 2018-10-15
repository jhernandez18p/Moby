import { 
    ADD_IMG_SERVICE, 
    DELETE_IMG_SERVICE, 
    REQUEST_IMG_SERVICE, 
    UPDATE_IMG_SERVICE,
    SHOW_IMG_ERROR
} from '../actions/service';

const initialState = {
    id: 0,
    image: null,
    name: null,
    text: null,
    uploaded_at: null,
    Service: null
}

export default function serviceReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_IMG_SERVICE:
            return payload.service_image;
        case UPDATE_IMG_SERVICE:
            return payload.service_image;
        case DELETE_IMG_SERVICE:
            return payload.service_image;
        case SHOW_IMG_ERROR:
            return payload.service_image;
        case REQUEST_IMG_SERVICE:
            return payload.service_image;
        default:
            return state;
    }
};