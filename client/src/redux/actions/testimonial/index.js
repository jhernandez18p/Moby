import axios from 'axios';

export const ADD_TESTIMONIAL = 'testimonials:addTestimonial';
export const DELETE_TESTIMONIAL = 'testimonials:deleteTestimonial';
export const REQUEST_TESTIMONIAL = 'testimonials:requestTestimonial';
export const SHOW_ERROR = 'testimonials:showError';
export const UPDATE_TESTIMONIAL = 'testimonials:updateTestimonial';
export const FETCH_TESTIMONIAL = 'testimonials:fetchTestimonial';


const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


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
            testimonials: 'ERROR!!',
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
                // console.log(Testimonial);
                // dispatch(requestTestimonial(Testimonial));
                return dispatch({
                    type: FETCH_TESTIMONIAL,
                    payload: {
                        testimonials: Testimonial
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}