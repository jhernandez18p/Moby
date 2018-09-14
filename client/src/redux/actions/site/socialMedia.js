import axios from 'axios';

export const ADD_SOCIAL_MEDIA = 'social_media:addSocialMedia';
export const DELETE_SOCIAL_MEDIA = 'social_media:deleteSocialMedia';
export const REQUEST_SOCIAL_MEDIA = 'social_media:requestSocialMedia';
export const SHOW_ERROR = 'social_media:showError';
export const UPDATE_SOCIAL_MEDIA = 'social_media:updateSocialMedia';
export const FETCH_SOCIAL_MEDIA = 'social_media:fetchSocialMedia';


const instance = axios.create({
    baseURL: 'http://localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});


export function addSocialMedia(newSocialMedia) {
    return {
        type: ADD_SOCIAL_MEDIA,
        payload: {
            social_media: newSocialMedia
        },
    }
};

export function updateSocialMedia(newSocialMedia) {
    return {
        type: UPDATE_SOCIAL_MEDIA,
        payload: {
            social_media: newSocialMedia
        },
    }
};

export function deleteSocialMedia(SocialMedia) {
    return {
        type: DELETE_SOCIAL_MEDIA,
        payload: {
            social_media: SocialMedia
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            social_media: 'ERROR!!',
            error: [error]
        }
    }
};

export function requestSocialMedia(SocialMedia) {
    return {
        type: REQUEST_SOCIAL_MEDIA,
        payload:{
            SocialMedia
        }
    }
};

export const fetchSocialMedia = () => {

    return dispatch => {
        instance.get(`social-media/`)
            .then(res => {
                let SocialMedia = res.data;
                // console.log(SocialMedia);
                // dispatch(requestSocialMedia(SocialMedia));
                return dispatch({
                    type: FETCH_SOCIAL_MEDIA,
                    payload: {
                        social_media: SocialMedia
                    }
                })
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
    }
}