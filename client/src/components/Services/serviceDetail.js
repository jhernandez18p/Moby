import React from "react";
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

const DetailService = (props) => {
    const service = props.service;
    return (
        <div className="column is-3">
            <div className="recent-feed">
                <div className="feed-img">
                    <Link to={`/servicios/${ service.slug ? service.slug : service.id }`}>
                        <img src={ service.image } alt={ service.name }></img>
                    </Link>
                </div>
                <div className="feed-title">
                    <h3 className="is-size-4">
                        <Link to={`/servicios/${ service.slug ? service.slug : service.id }`} className="has-text-black">{ service.name }</Link>
                    </h3>
                </div>
                <div className="feed-content">
                    <div dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(service.description) } }></div>
                </div>
            </div>
        </div>
    );
}

export default DetailService;
