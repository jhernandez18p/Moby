import React from "react";
import { Link } from 'react-router-dom';


const DetailCategory = (props) => {
    if (props.category === undefined) {
        return <div></div>;
    } else {
        return (
            <div>
                <div className="card is-centered overlayer">
                    <div className="content-overlay"></div>
                    <img className="content-image" alt="Productos de moby" src={props.category.background}></img>
                    <div className="content-details fadeIn-top">
                        <Link to={`/productos/todos?departamento=${props.category.id}`}>
                            <h3>{props.category.name}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCategory;