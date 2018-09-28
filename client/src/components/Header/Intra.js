import React, { Component } from 'react';

// Componentes
import IntraNav from '../Nav/Intra';

class IntraHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: true,
      toggled: false,
      fixedMenu: true
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = function () {
    if (this.state.toggled){
      this.setState({ 
        showMenu: this.state.showMenu,
        toggled: !this.state.toggled
      });
    }else{
      this.setState({ 
        showMenu: !this.state.showMenu,
        toggled: this.state.toggled
      });
    }
  }

  render() {
    let breadcrumb = this.props.breadcrumb;
    return (
      <div ref="test">
        <IntraNav 
          breadcrumb={breadcrumb}
          toggleMenu={this.toggleMenu} 
          showMenu={this.state.showMenu} 
          fixedMenu={this.state.fixedMenu}/>
      </div>
    );
  }
}

export default IntraHeader;