import axios from 'axios';

export const ADD_COLOR = 'color:addColor';
export const REQUEST_COLOR = 'color:fetchSingleColor';
export const UPDATE_COLOR = 'color:updateColor';
export const DELETE_COLOR = 'color:deleteColor';
export const FETCH_COLORS = 'colors:fetchColors';
export const SHOW_ERROR = 'colors:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            code: null,
            model: null,
            name: null,
            origin: null,
            sales_unit: null,
            ref: null,
            description: null,
            slug: null,
            stock: null,
            views: null,
            picture: null,
            price_1: null,
            price_2: null,
            price_3: null,
            price_4: null,
            price_5: null,
            updated: null,
            created_at: null,
            img: null,
            active: null,
            featured: null,
            imported: null,
            is_shipping_required: null,
            item_type: null,
            line: null,
            category: null,
            color: null,
            department: null,
            brand: null,
            provider: null,
            sub_line: null,
        },
    ]
}

const singleColor = {
    id: 0,
    code: null,
    model: null,
    name: null,
    origin: null,
    sales_unit: null,
    ref: null,
    description: null,
    slug: null,
    stock: null,
    views: null,
    picture: null,
    price_1: null,
    price_2: null,
    price_3: null,
    price_4: null,
    price_5: null,
    updated: null,
    created_at: null,
    img: null,
    active: null,
    featured: null,
    imported: null,
    is_shipping_required: null,
    item_type: null,
    line: null,
    category: null,
    color: null,
    department: null,
    brand: null,
    provider: null,
    sub_line: null,
}

export function addColor(newColor) {
    return {
        type: ADD_COLOR,
        payload: {
            color: singleColor,
            colors: newColor
        },
    }
};

export function updateColor(newColor) {
    return {
        type: UPDATE_COLOR,
        payload: {
            color: newColor
        },
    }
};

export function deleteColor(color) {
    return {
        type: DELETE_COLOR,
        payload: {
            color: singleColor,
            colors: color
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            color: singleColor,
            colors: initialState,
            error: [error]
        }
    }
};

export const fetchSingleColor = (slug) => {

    return dispatch => {
        instance.get(`colors/${slug}/`)
            .then(res => {
                let color = res.data;
                return dispatch({
                    type: REQUEST_COLOR,
                    payload: {
                        color: color
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}

export const fetchColors = ( params = '', offset = 0 ) => {

    let _offset = offset;
    let page = '';
    let hasParams = '';
    if (_offset >= 1){
        _offset = offset * 20;
        page = `&offset=${_offset}`;
    }
    let url = 'colors/';
    if (params !== ''){
        let newUrl = params.split('?');
        hasParams = newUrl[1];
    }
    let _url = `${url}?${hasParams}${page}&active=true&limit=90`;

    return dispatch => {
        instance.get(_url)
            .then(res => {
                let colors = res.data;
                return dispatch({
                    type: FETCH_COLORS,
                    payload: {
                        colors: colors
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}
