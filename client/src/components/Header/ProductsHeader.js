import React, { Component } from 'react';

// Componentes
import ProductsNav from '../Nav/Products';

class ProductsHeader extends Component {
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
    let postsCountLimit=this.props.postsCountLimit;
    let postsCount=this.props.postsCount;
    let currentPage=this.props.currentPage;
    let limitPage=this.props.limitPage;
    let offsetPage=this.props.offsetPage;
    let urlPage=this.props.urlPage;
    let nextPage=this.props.handleNextClick;
    let previousPage=this.props.handlePrevClick;
    let hasNext=this.props.hasNext;
    let hasPrev=this.props.hasPrev;

    return (
      <div ref="test">
        <ProductsNav 
          toggleMenu={this.toggleMenu} 
          showMenu={this.state.showMenu} 
          fixedMenu={this.state.fixedMenu}

          postsCountLimit={postsCountLimit}
          postsCount={postsCount}
          currentPage={currentPage}
          limitPage={limitPage}
          offsetPage={offsetPage}
          urlPage={urlPage}
          nextPage={nextPage}
          previousPage={previousPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
          />
      </div>
    );
  }
}

export default ProductsHeader;