import React, { Component } from "react";

import DetailCategory from './detailCategory';


class Categories extends Component {
  render() {
    function* chunkArray(original, n = 2) {
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

            <div id="categories">
              {Array.from(chunkArray(this.props.departments.results, 2)).map(
                ([one, two,], y) => {
                  let html = (
                    <div key={y.toString()}>
                      <div className="columns is-home-categories">
                        <DetailCategory category={one} ></DetailCategory>
                        <DetailCategory category={two} ></DetailCategory>
                      </div>
                    </div>
                  )
                  return html
                }
              )
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Categories;