import { 
    ADD_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA,
    REQUEST_SOCIAL_MEDIA,
    SHOW_ERROR,
    UPDATE_SOCIAL_MEDIA,
    FETCH_SOCIAL_MEDIA,
} from '../actions/site/socialMedia';

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name: null,
            url: null,
            icon: null,
            title: null,
            site: 1
        },
    ]
}

export default function socialMediaReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_SOCIAL_MEDIA:
            return payload.social_media;
        case UPDATE_SOCIAL_MEDIA:
            return payload.social_media;
        case DELETE_SOCIAL_MEDIA:
            return payload.social_media;
        case SHOW_ERROR:
            return payload.social_media;
        case REQUEST_SOCIAL_MEDIA:
            return payload.social_media;
        case FETCH_SOCIAL_MEDIA:
            return payload.social_media;
        default:
            return state;
    }
};