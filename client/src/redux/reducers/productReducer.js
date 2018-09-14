import { 
    ADD_PRODUCT, 
    REQUEST_PRODUCT, 
    UPDATE_PRODUCT,
    DELETE_PRODUCT, 
    FETCH_PRODUCTS,
    SHOW_ERROR
} from '../actions/product';

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

export default function productReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            return payload.products;
        case UPDATE_PRODUCT:
            return payload.products;
        case DELETE_PRODUCT:
            return payload.products;
        case REQUEST_PRODUCT:
            return payload.products;
        case FETCH_PRODUCTS:
            return payload.products;
        case SHOW_ERROR:
            return payload.products;
        default:
            return state;
    }
};