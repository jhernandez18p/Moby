import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class RedesLine extends Component {

    render() {

        // console.log(this.state.isBotton);
        
        
        let sm = this.props.redes.results;
        let smCount = this.props.redes.count;
        
        let redesItems = <div></div>;
        if (smCount >= 1) {
            redesItems = sm.slice(0, 6).map(
                (re) => {
                    // console.log(re);
                    let html = (
                        <div className="level-item has-text-white" key={re.id.toString()} >
                            <a href={re.url} target="_blank">
                                <span className="icon is-large has-text-white">
                                    <i className={`fab ${re.icon} fa-2x has-text-white`}></i>
                                </span>
                            </a>
                        </div>
                    )
                    return html;
                }
            );
        }

        return (
            <div className="is-social-media level">
                <div className="level-left">
                    <div className="level-item">
                        <p className="navbar-item is-size-6 has-text-white">
                            Síguenos en nuestras redes sociales!
                        </p>
                    </div>
                </div>
                <div className="level-right">
                    {redesItems}
                </div>
            </div>
        );
    }
}

export default RedesLine;