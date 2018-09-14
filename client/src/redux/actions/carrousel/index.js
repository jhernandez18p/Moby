import axios from 'axios';

export const ADD_CARROUSEL = 'carrousel:addCarrousel';
export const UPDATE_CARROUSEL = 'carrousel:updateCarrousel';
export const DELETE_CARROUSEL = 'carrousel:deleteCarrousel';
export const REQUEST_CARROUSEL = 'carrousel:requestCarrousel';
export const FETCH_CARROUSELS = 'carrousel:fetchCarrousels';
export const SHOW_ERROR = 'carrousel:showError';

const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


export function addCarrousel(newCarrousel) {
    return {
        type: ADD_CARROUSEL,
        payload: {
            carrousel: newCarrousel
        },
    }
};

export function updateCarrousel(newCarrousel) {
    return {
        type: UPDATE_CARROUSEL,
        payload: {
            carrousel: newCarrousel
        },
    }
};

export function deleteCarrousel(Carrousel) {
    return {
        type: DELETE_CARROUSEL,
        payload: {
            carrousel: Carrousel
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            carrousel: 'ERROR!!',
            error: [error]
        }
    }
};

export const fetchCarrousels = () => {

    return dispatch => {
        instance.get(`carousels/`)
            .then(res => {
                let carrousel = res.data;
                // console.log(carrousels);
                // dispatch(requestcarrousels(carrousels));
                return dispatch({
                    type: FETCH_CARROUSELS,
                    payload: {
                        carrousel
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}