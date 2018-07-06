import React, { Component } from "react";
import { Link } from 'react-router-dom';

import ServicesCarousel from "../../components/Carrousel/ServicesCarousel";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid has-background-moby">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div id="whatWeDo">
                  <div className="">
                    <h2 className="is-size-1">Lo que hacemos</h2>
                  </div>
                  <div className="">
                    <h3 className="is-size-3">Queremos ofrecer soluciones a sus necesidades.</h3>
                  </div>
                  <div className="">
                    <h3 className="is-size-4"><Link to="/servicios/canteo" className="has-text-black">Canteo</Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br></br><br></br>
                    </p>
                    <h3 className="is-size-4"><Link to="/servicios/cortes" className="has-text-black">Cortes</Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br></br><br></br>
                    </p>
                    <h3 className="is-size-4"><Link to="/servicios/perforacion" className="has-text-black">Perforación</Link></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br></br><br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column is-half" id="serviceSlide">
                <ServicesCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Services;