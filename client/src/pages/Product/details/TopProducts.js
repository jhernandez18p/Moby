import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';

// import axios from 'axios';


import DOMPurify from 'dompurify';

class TopProducts extends Component {
    render() {
        const brand = this.props.product;
        
        // const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });
        // function getCategory(category){instance.get(`categories/${category}/`).then((res) => { category = res.data.name;})}
        // console.log(brand)

        var category;
        if (brand.department !== null && brand.category === null){
            category = brand.department;
        }else if(brand.department === null && brand.category !== null){
            category = brand.category;
        }

        return (
            <div className="column">
                <div className="recent-feed">
                    <div className="feed-img">
                        <Link to={`/producto/${
                            brand.slug
                            ?brand.slug
                            :brand.code
                        }`}>
                            <img src={ brand.img } alt={ brand.code } className="image is-128-256" ></img>
                        </Link>
                    </div>
                    <div className="feed-title">
                        <h3 className="is-size-4">
                            <Link to={`/producto/${
                                brand.slug
                                ?brand.slug
                                :brand.code
                            }`} className="has-text-black">
                                {
                                    brand.name
                                    ?brand.name
                                    :brand.code
                                }
                            </Link>
                        </h3>
                    </div>
                    <div className="feed-leyend is-clearfix">
                        <p className="is-size-7 is-pulled-left">
                            <span className="icon"><i className="fas fa-folder-open"></i></span>
                            <Link to={`/productos/todos?cat=${ category }`} className="has-text-black">
                                { category }
                            </Link>
                        </p>
                    </div>
                    <div className="feed-content">
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(brand.description) }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopProducts;