import React, { Component } from 'react';

class PanelAdmin extends Component {
    render(){
        return(
            <div>
                <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-2 ">

                            <div className="column has-background-info">
                                <h3 className="is-uppercase is-merginless is-size-5 has-text-left has-text-white">Panel de Administración</h3>
                            </div>

                            <div className="column has-background-info">
                                <h3 className="is-uppercase is-merginless is-size-5 has-text-centered has-text-white">Inicio</h3>
                            </div>

                            <div className="column is-3 has-background-info">
                                <h3 className="is-uppercase is-merginless is-size-5 has-text-right has-text-white">Inicio</h3>
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
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-padding-y-30">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelAdmin;