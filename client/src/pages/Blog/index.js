import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// Components
import Post from '../../components/Blog';
import Pagination from '../../components/Paginator';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// actions
import {
  fetchBlogPost,
  fetchNextBlogPost,
  fetchPrevBlogPost
} from '../../redux/actions/blog'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limitPage: 16,
      offsetPage: 0,
      totalPages: Math.ceil(this.props.blog_posts.count / 16),
      urlPage: 'posts/',
      nextPage: '',
      previousPage: null,
      hasNext: true,
      hasPrev: false
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  handleNextClick(e) {
    e.preventDefault();

    let currentPage = this.state.currentPage + 1; //Aumenta el numero de la pagina
    let limitPage = this.state.limitPage || 16;
    let pages = this.state.totalPages;
    let offsetPage = Math.ceil(limitPage * (currentPage - 1));
    
    this.setState({
      currentPage: currentPage,
      offsetPage: offsetPage
    })
    
    if (currentPage === pages) { // Validate if next is able
      this.setState({
        hasNext: false
      })
    }
    
    if (currentPage > 1) { // Validate if prev is able
      this.setState({
        hasPrev: true
      })
    }
    
    if (currentPage > 1 && currentPage <= pages){
      this.props.onFetchNextBlogPost(limitPage, offsetPage);
    }
    
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }
  
  handlePrevClick(e) {
    e.preventDefault();
    
    let currentPage = this.state.currentPage - 1; //Decrementa el numero de la pagina
    let limitPage = this.state.limitPage || 16;
    let offsetPage = this.state.offsetPage - limitPage;
    let pages = this.state.totalPages;

    this.setState({
      currentPage: currentPage,
      offsetPage: offsetPage
    })
    if (currentPage === 1) {
      this.setState({
        hasPrev: false,
        hasNext: true
      })
    }
    if (currentPage >= 1 && currentPage <= pages){
      this.props.onFetchPrevBlogPost(limitPage, offsetPage);
    }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  render() {
    // console.log('currentPage ->', this.state.currentPage, 'pages ->', this.state.totalPages, 'offset ->', this.state.offsetPage)

    function* chunkArray(original, n, max) {
      let ary = [...original];
      ary = ary.splice(0, max);
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    let user = this.props.user || { user: { first_name: 'Guest' }, isAuthenticated: false };
    let posts = this.props.blog_posts || 'Cargando ...';
    let tags = this.props.blog_tags;


    let _posts = posts.results;

    let paginator = <div></div>;
    let postsCount = posts.count || undefined;
    let postsCountLimit = 16;

    if (postsCount > 16) {

      let currentPage = this.state.currentPage;
      let limitPage = this.state.limitPage;
      let offsetPage = this.state.offsetPage;
      let urlPage = this.state.urlPage;
      // let nextPage = this.state.nextPage;
      // let previousPage = this.state.previousPage;

      paginator = (
        <Pagination
          postsCountLimit={postsCountLimit}
          postsCount={postsCount}
          currentPage={currentPage}
          limitPage={limitPage}
          offsetPage={offsetPage}
          urlPage={urlPage}
          nextPage={this.handleNextClick}
          previousPage={this.handlePrevClick}
          hasNext={this.state.hasNext}
          hasPrev={this.state.hasPrev}
        />
      )
    }

    let authBanner = <div></div>;
    if (!user.isAuthenticated) {
      authBanner = (
        <div className="section has-background-light-green box-animation">
          <div className="columns">
            <div className="column">
              <div className="has-text-left ">
                <h3 className="is-size-2">
                  Unete a nuestro sistema
                  </h3>
                <p className="is-size-6">
                  Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                  </p>
              </div>
              <div className="btns">
                <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                <Link to="/auth/registro" className="button is-link">Registrarse</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    let tagsItemns = <div></div>;
    if (tags.count > 1) {
      let listTagsItems = tags.results.slice(0, 8).map(
        (tag) => {
          let html = (
            <li key={tag.id.toString()}>
              <Link to={`/blog?cat=${tag.slug}`} className="has-text-black">{tag.title}</Link>
            </li>
          )
          return html;
        }
      )
      tagsItemns = (
        <ul>
          {listTagsItems}
        </ul>
      )
    }

    return (
      <div>
        <Helmet title="Moby Supply - Blog" />
        <div className="container" id="blog">
          <hr></hr>
          <div className="has-text-centered is-padding-y-30">
            <h3 className="is-size-2">
              Bienvenidos al Blog de Moby Supply
            </h3>
          </div>

          <div className="blog-cat has-text-centered">
            {tagsItemns}
          </div>

          {authBanner}

          {Array.from(chunkArray(_posts, 4, postsCountLimit)).map(([one, two, three, four], y) => {
            const html = (
              <div className="columns is-padding-top-30" key={y.toString()}>
                {one ? <Post post={one}></Post> : <div className="column is-3"></div>}
                {two ? <Post post={two}></Post> : <div className="column is-3"></div>}
                {three ? <Post post={three}></Post> : <div className="column is-3"></div>}
                {four ? <Post post={four}></Post> : <div className="column is-3"></div>}
              </div>
            );
            return html
          })}
        </div>
        <div className="is-padding-y-60 container-fluid">
          {paginator}
        </div>
      </div>
    );
  }
}

// blog_post
const blogSelector = createSelector(
  state => state.blog_posts,
  blog_posts => blog_posts
);

// blog_tags
const blogTagSelector = createSelector(
  state => state.blog_tags,
  blog_tags => blog_tags
);

const mapStateToProps = createSelector(
  blogSelector,
  blogTagSelector,
  (blog_posts, blog_tags) => (
    {
      blog_posts,
      blog_tags,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchNextBlogPost: fetchNextBlogPost,
      onFetchPrevBlogPost: fetchPrevBlogPost,
      onFetchBlogPost: fetchBlogPost,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);