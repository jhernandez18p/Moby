import React, { Component } from "react";


import DetailService from "./serviceDetail";

class ServicesList extends Component {

    render() {
        function* chunkArray(original, n) {
            const ary = [...original];
            while (ary.length > 0)
               yield ary.splice(ary, n);
        }

        return (
            <div>
                <div className="container" id="feeds">
                    <div id="categories">
                        {Array.from(chunkArray(this.props.services, 4)).map(
                            ([one, two, three, four], y) => {
                                let html = (
                                    <div className="columns is-home-categories" key={y.toString()} >
                                        {
                                            one === undefined
                                            ?<div className="column is-3"></div>
                                            :<DetailService service={one} ></DetailService>
                                        }
                                        {
                                            two === undefined
                                            ?<div className="column is-3"></div>
                                            :<DetailService service={two} ></DetailService>
                                        }
                                        {
                                            three === undefined
                                            ?<div className="column is-3"></div>
                                            :<DetailService service={three} ></DetailService>
                                        }
                                        {
                                            four === undefined
                                            ?<div className="column is-3"></div>
                                            :<DetailService service={four} ></DetailService>
                                        }
                                    </div>
                                )
                                return html
                            }
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesList;

