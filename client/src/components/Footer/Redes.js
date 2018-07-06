import React, { Component } from 'react'; 

class RedesLine extends Component {
    componentDidMount(){
        window.addEventListener('scroll', this.handlerScroll, false);
    }
    handlerScroll = () =>{
        // let documentHeight = document.querySelector('body').offsetHeight;
        // let footerHeight = document.querySelector('footer').offsetHeight;
        // let magic = documentHeight - (footerHeight+50);
        // console.log(
        //     document.getElementsByTagName('footer').scrollTop, documentHeight
        // );
        // if (documentHeight > magic){
        // }
    };
    render() {
        return (    
            <div className="has-footer-background-dark is-fullhd" id="redes">
                <div className="container">
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="navbar-item is-size-6 has-text-white">
                                    Síguenos en nuestras redes sociales!
                                </p>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-facebook-f has-text-white"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-instagram has-text-white"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-twitter has-text-white"></i>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default RedesLine;