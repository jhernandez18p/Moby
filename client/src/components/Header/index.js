import React, { Component } from 'react';

// Componentes
import Nav from '../Nav/index';

class Header extends Component {
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
    let site = this.props.site;
    
    let sitePhone = site.phone || 'nada';
    
    return (
      <div ref="test">
        <Nav 
          toggleMenu={this.toggleMenu} 
          showMenu={this.state.showMenu} 
          fixedMenu={this.state.fixedMenu}
          sitePhone={sitePhone}/>
      </div>
    );
  }
}

export default Header;