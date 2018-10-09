import React, { Component } from "react";
import { Link } from "react-router-dom";

import DOMPurify from 'dompurify';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// actions
import { fetchCategory } from '../../../redux/actions/category';


class TopProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryName: '',
            categoryID: '',
            product:{},
        }
    }

    getCat(catId){
        this.props.onFetchCategory(catId);

        console.log( this.props.category.name)
        return this.props.category.name
    }

    render() {
        
        let product = this.props.product || undefined;
        
        let category = "this.getCat()";

        if (product === undefined){
            return (
                <div className="column">
                    <div className="recent-feed">
                        <div className="feed-img">
                        </div>
                        <div className="feed-title">
                            <h3 className="is-size-4">
                            </h3>
                        </div>
                        <div className="feed-leyend is-clearfix">
                            <p className="is-size-7 is-pulled-left">
                                <span className="icon"><i className="fas fa-folder-open"></i></span>
                            </p>
                        </div>
                        <div className="feed-content">
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="column">
                    <div className="recent-feed">
                        <div className="feed-img">
                            <Link to={`/producto/${product.slug ? product.slug : product.code}`}>
                                <img src={product.img} alt={product.code} className="image is-128-256" ></img>
                            </Link>
                        </div>
                        <div className="feed-title">
                            <h3 className="is-size-4">
                                <Link to={`/producto/${product.slug ? product.slug : product.code}`} className="has-text-black">
                                    {product.name ? product.name : product.code}
                                </Link>
                            </h3>
                        </div>
                        <div className="feed-leyend is-clearfix">
                            <p className="is-size-7 is-pulled-left">
                                <span className="icon"><i className="fas fa-folder-open"></i></span>
                                <Link to={`/productos/todos?cat=${category}`} className="has-text-black">
                                    {category}
                                </Link>
                            </p>
                        </div>
                        <div className="feed-content">
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

// blog_tags
const categorySelector = createSelector(
    state => state.category,
    category => category
);

const mapStateToProps = createSelector(
    categorySelector,
    (category) => (
        {
            category,
        }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onFetchCategory: fetchCategory,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProducts);