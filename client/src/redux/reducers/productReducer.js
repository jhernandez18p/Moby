import { 
    ADD_PRODUCT, 
    REQUEST_PRODUCT, 
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    SHOW_ERROR
} from '../actions/product';

const initialProduct = {
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

export default function productReducer (state = initialProduct, {type,payload}) {
    switch (type) {
        case ADD_PRODUCT:
            return payload.product;
        case UPDATE_PRODUCT:
            return payload.product;
        case DELETE_PRODUCT:
            return payload.product;
        case REQUEST_PRODUCT:
            return payload.product;
        case SHOW_ERROR:
            return payload.product;
        default:
            return state;
    }
}