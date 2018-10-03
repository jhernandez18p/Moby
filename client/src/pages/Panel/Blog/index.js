import React, { Component } from 'react';


import Paginator from '../../../components/Paginator';

class PanelBlog extends Component {
    render(){
        return(
            <div>
                <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-2 ">

                            <div className="column is-5 has-background-info">
                                <h3 className="is-size-5 has-text-left has-text-white is-uppercase is-marginless">Blog</h3>
                            </div>

                            <div className="column is-4 has-background-info">
                            </div>

                            <div className="column is-3 has-background-info">
                                <h3 className="is-size-5 has-text-right has-text-white is-uppercase is-marginless">Mis comentarios</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="columns is-padding-top-30" >
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="column is-padding-y-30">

                        </div>
                    </div>
                    <div className="columns is-variable is-0 is-marginless">
                        <div className="column is-padding-y-30">

                        </div>
                    </div>
                    <div className="columns is-variable is-0 is-marginless">
                        <div className="column is-padding-y-30">
                            
                        </div>
                    </div>
                </div>
                <div className="columns is-padding-top-30" >
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-0 is-marginless">
                            
                            <Paginator/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelBlog;