import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import PanelHome from './Home';


class PanelLayout extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="intra pageloader">
          <div className="content">
            <Switch>
              <Route exact path="/intra" component={ PanelHome } />>
            </Switch>
          </div>
        </div>
      );
    }
  }
  
  export default PanelLayout;