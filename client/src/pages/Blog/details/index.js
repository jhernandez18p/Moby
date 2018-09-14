import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// actions
import { fetchBlogPost } from '../../../redux/actions/blog'

class BlogDetail extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      postSlug: ''
    }
  }

  componentDidMount(){
    const { slug } = this.props.match.params;
    this.setState({
      postSlug: slug,
    })
    this.props.onFetchBlogPost()
  }
  
  render() {
    const filter = (array, key, val) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] === val) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    // console.log(this.props.blog_post)
    let post = this.state.post;
    let posts = this.props.blog_post;
    
    if (posts.count >= 1){
      post = filter(posts.results, 'slug', post);
      console.log(post);
      
    }

    return (
      <div>
        <Helmet
          title="Moby Supply - Titulo del post"
        />
        <div className="container" id="blogDetails">
          <div className="is-padding-top-30">
            <figure className="image is-3by1 box-animation">
              <img src="https://bulma.io/images/placeholders/720x240.png" alt=""></img>
            </figure>
          </div>
          <div className="is-blog-content is-padding-top-30">
            <h2>¿Qué es Lorem Ipsum?</h2>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
          <div className="is-blog-author is-padding-top-30">
            <p className="has-text-right">
              <strong>John Doe</strong> <small>@johnDoe</small>&nbsp;<small>31m</small>
            </p>
          </div>
        </div>

        <div className="container-fluid">

          <div className="has-background-moby">
            <div className="container is-padding-bottom-30">
              <div className="has-text-centered is-padding-y-30">
                <h3 className="is-size-4">Ultimos Comentarios</h3>
              </div>
              
              <div className="columns">
                <div className="column is-8 is-offset-2">

                  <article className="media box-animation" id="blogComents">
                    <div className="media-content-img">
                      <figure className="media-left has-text-centered">
                        <p className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/256x256.png" alt=""></img>
                        </p>
                        <strong>John Doe</strong>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="media-content-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item">
                            <small>@johnDoe</small>&nbsp;<small>31m</small>
                          </a>
                          {/* <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                          </a> */}
                        </div>
                      </nav>
                    </div>
                  </article>
              
                  <article className="media box-animation" id="blogComents">
                    <div className="media-content-img">
                      <figure className="media-left has-text-centered">
                        <p className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/256x256.png" alt=""></img>
                        </p>
                        <strong>John Doe</strong>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="media-content-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item">
                            <small>@johnDoe</small>&nbsp;<small>31m</small>
                          </a>
                          {/* <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                          </a> */}
                        </div>
                      </nav>
                    </div>
                  </article>
              
                  <article className="media box-animation" id="blogComents">
                    <div className="media-content-img">
                      <figure className="media-left has-text-centered">
                        <p className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/256x256.png" alt=""></img>
                        </p>
                        <strong>John Doe</strong>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="media-content-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item">
                            <small>@johnDoe</small>&nbsp;<small>31m</small>
                          </a>
                          {/* <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                          </a> */}
                        </div>
                      </nav>
                    </div>
                  </article>
          
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container is-padding-y-60">
          <div className="section has-background-light-green box-animation">
            <div className="columns">
              <div className="column">
                <div className="has-text-left ">
                  <h3 className="is-size-2">
                    Dejar un comentario
                  </h3>
                  <p className="is-size-6">
                    Para dejar un comentario es necesario estar registrado
                  </p>
                </div>
                <br></br>
                <div className="btns">
                  <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                  <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// blog_post
const blogSelector = createSelector(
  state => state.blog_post,
  blog_post => blog_post
);

// blog_tags
const blogComentsSelector = createSelector(
  state => state.blog_comments,
  blog_comments => blog_comments
);

const mapStateToProps = createSelector(
  blogSelector,
  blogComentsSelector,
  (blog_post, blog_comments) => (
    {
      blog_post,
      blog_comments,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBlogPost: fetchBlogPost,
    }, dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogDetail);