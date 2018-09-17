import axios from 'axios';

export const ADD_IMAGES_CARROUSEL = 'img_carrousel:addImageCarrousel';
export const UPDATE_IMAGES_CARROUSEL = 'img_carrousel:updateImageCarrousel';
export const DELETE_IMAGES_CARROUSEL = 'img_carrousel:deleteImageCarrousel';
export const REQUEST_IMAGES_CARROUSEL = 'img_carrousel:requestImageCarrousel';
export const FETCH_IMAGES_CARROUSELS = 'img_carrousel:fetchImageCarrousels';
export const SHOW_ERROR = 'img_carrousel:showError';

const instance = axios.create({ baseURL: 'http://127.0.0.1:10500/api/v2/', headers: {"Content-Type": "application/json"} });

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

export function addImageCarrousel(newImageCarrousel) {
    return {
        type: ADD_IMAGES_CARROUSEL,
        payload: {
            img_carrousel: newImageCarrousel
        },
    }
};

export function updateImageCarrousel(newImageCarrousel) {
    return {
        type: UPDATE_IMAGES_CARROUSEL,
        payload: {
            img_carrousel: newImageCarrousel
        },
    }
};

export function deleteImageCarrousel(ImageCarrousel) {
    return {
        type: DELETE_IMAGES_CARROUSEL,
        payload: {
            img_carrousel: ImageCarrousel
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            img_carrousel: initialState,
            error: [error]
        }
    }
};

export const fetchImageCarrousels = () => {

    return dispatch => {
        instance.get(`carousel-images/`)
            .then(res => {
                let img_carrousel = res.data;
                return dispatch({
                    type: FETCH_IMAGES_CARROUSELS,
                    payload: {
                        img_carrousel
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}