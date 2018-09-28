import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paginator from '../../../components/Paginator';



class PanelUser extends Component {
    render(){
        return(
            <div>
                <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-2 ">

                            <div className="column has-background-info">
                                <h3 className="is-uppercase is-marginless is-size-5 has-text-left has-text-white">Panel de Administración</h3>
                            </div>

                            <div className="column has-background-info">
                                <h3 className="is-uppercase is-marginless is-size-5 has-text-right has-text-white">usuarios</h3>
                            </div>

                            {/* <div className="column is-3 has-background-info"> */}
                                {/* <h3 className="is-uppercase is-marginless is-size-5 has-text-right has-text-white">Inicio</h3> */}
                            {/* </div> */}

                        </div>
                    </div>
                </div>

                <div className="columns is-padding-top-30" >
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-10 is-offset-1 is-padding-y-30">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><abbr title="code">Nombre</abbr></th>
                                            <th>Email</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <Link to="/intra/administracion/productos"> - </Link>
                                            </th>
                                            
                                            <td>
                                                {/*  */}
                                            </td>
                                            
                                            <td>
                                                {/*  */}
                                            </td>

                                            <td>
                                                {/*  */}
                                            </td>
                                            
                                            <td>
                                                <a className="button is-rounded is-small">
                                                    <span className="icon is-small">
                                                        <i className="fas fa-bold"></i>
                                                    </span>
                                                </a>
                                            </td>
                                            <td>
                                                <a className="button is-rounded is-small">
                                                    <span className="icon is-small">
                                                        <i className="fas fa-bold"></i>
                                                    </span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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

export default PanelUser;