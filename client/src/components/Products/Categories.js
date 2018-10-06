import React, { Component } from "react";

import DetailCategory from './detailCategory';


class Categories extends Component {
  render() {
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="container" id="categories">
            <div className="is-centered">
              <h3 className="is-size-2">Nuestras Principales categorías de productos</h3>
            </div>
            <div>
              {Array.from(chunkArray(this.props.departments.results, 2)).map(
                ([one, two], y) => {
                  return (
                    <div key={y.toString()}>
                      <div className="columns is-home-categories">
                        <div className="column is-5 is-offset-1"><DetailCategory category={one}></DetailCategory></div>
                        <div className="column is-5"><DetailCategory category={two}></DetailCategory></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;