import axios from 'axios';

export const ADD_TESTIMONIAL = 'testimonials:addTestimonial';
export const DELETE_TESTIMONIAL = 'testimonials:deleteTestimonial';
export const REQUEST_TESTIMONIAL = 'testimonials:requestTestimonial';
export const SHOW_ERROR = 'testimonials:showError';
export const UPDATE_TESTIMONIAL = 'testimonials:updateTestimonial';
export const FETCH_TESTIMONIAL = 'testimonials:fetchTestimonial';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

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

export function addTestimonial(newTestimonial) {
    return {
        type: ADD_TESTIMONIAL,
        payload: {
            testimonials: newTestimonial
        },
    }
};

export function updateTestimonial(newTestimonial) {
    return {
        type: UPDATE_TESTIMONIAL,
        payload: {
            testimonials: newTestimonial
        },
    }
};

export function deleteTestimonial(Testimonial) {
    return {
        type: DELETE_TESTIMONIAL,
        payload: {
            testimonials: Testimonial
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            testimonials: initialState,
            error: [error]
        }
    }
};

export function requestTestimonial(Testimonial) {
    return {
        type: REQUEST_TESTIMONIAL,
        payload:{
            Testimonial
        }
    }
};

export const fetchTestimonial = () => {
    return dispatch => {
        instance.get(`testimonials/`)
            .then(res => {
                let Testimonial = res.data;
                return dispatch({ type: FETCH_TESTIMONIAL, payload: { testimonials: Testimonial } })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}