import { 
    DELETE_SITE, 
    REQUEST_SITE, 
    UPDATE_SITE,
    FETCH_SITE,
    SHOW_ERROR
} from '../actions/site';

const initialSite = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            name: null,
            title: null,
            short_description: null,
            description: null,
            url: null,
            phone: null,
            phone2: null,
            email: null,
            email2: null,
            schedule: null,
            workday: null,
            address: null,
            address1: null,
            logo: null,
            site_img: null,
            services_img: null,
            products_img: null,
            direction: null,
            direction_city: null,
            is_undercostruction: true,
        },
    ]
};

export default function siteReducer(state = initialSite, { type, payload }) {
    switch (type) {
        case UPDATE_SITE:
            return payload.site;
        case DELETE_SITE:
            return payload.site;
        case SHOW_ERROR:
            return payload.site;
        case REQUEST_SITE:
            return payload.site;
        case FETCH_SITE:
            return payload.site;
        default:
            return state;
    }
};

