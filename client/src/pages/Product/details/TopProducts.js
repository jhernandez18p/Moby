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
    constructor(props) {
        super(props);
        this.state = {
            categoryName: '',
            categoryID: '',
            product: {},
        }
    }

    // componentDidMount(){
    //     this.getCat(this.props.product)
    //     if (this.props.product !== undefined){
    //         if (this.props.product.category !== null){
    //             console.log(this.props.product.category)
    //         }
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.product !== prevProps.product) {
    //         console.log(this.props.product.category);
    //     }
    //     if (this.props.category !== prevProps.category) {
    //         console.log(this.props.category !== prevProps.category)
    //     }
    //     setTimeout(() => {
    //         this.setState({ loading: false })
    //     }, 400);
    // }

    // getCat(catId) {
    //     this.props.onFetchCategory(catId);
    //     console.log(this.props.category.name)
    //     return this.props.category.name
    // }

    render() {

        let product = this.props.product || undefined;
        let categoryID = '';
        if (this.props.product !== undefined) {
            if (this.props.product.category !== null) {
                // console.log(this.props.product.category)
                categoryID = this.props.product.category || 1;
            }
        }

        let categoryName = this.state.categoryName || 'Moby Supply';

        if (product === undefined) {
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
        } else {
            return (
                <div className="column">
                    <div className="recent-feed">
                        <div className="feed-img">
                            <Link to={`/producto/${product.slug ? product.slug : product.code}`}>
                                <img src={product.img} alt={product.code} className="image is-128-256" ></img>
                            </Link>
                        </div>
                        <div className="feed-title">
                            <h3 className="is-size-7">
                                <Link to={`/producto/${product.slug ? product.slug : product.code}`} className="has-text-black">
                                    {product.name ? product.name : product.code}
                                </Link>
                            </h3>
                        </div>
                        <div className="feed-leyend is-clearfix">
                            <p className="is-size-7 is-pulled-left">
                                <span className="icon"><i className="fas fa-folder-open"></i></span>
                                <Link to={`/productos/todos?cat=${categoryID}`} className="has-text-black">
                                    {categoryName}
                                </Link>
                            </p>
                        </div>
                        <div className="feed-content">
                            <div className="is-size-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const categorySelector = createSelector(
    state => state.category,
    category => category
);

const mapStateToProps = createSelector(
    categorySelector,
    (category) => (
        { category, }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        { onFetchCategory: fetchCategory, }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProducts);