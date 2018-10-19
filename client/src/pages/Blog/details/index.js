import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import DOMPurify from 'dompurify';
import moment from 'moment';

// Components
import NotFound from '../../../components/Errors';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// actions
import { requestBlogPost } from '../../../redux/actions/blog';
import { fetchBlogCommensts } from '../../../redux/actions/blog/comment';

// Assets
import BaseImg from '../../../assets/images/base.jpg';

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { postSlug: '', postID: 0 }
  }

  getComents(){this.props.onFetchComents(this.state.postID);}

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.setState({ postSlug: slug });
    this.props.onFetchBlogPost(slug);
  }
  
  componentDidUpdate(prevProps, prevState){
    const { slug } = this.props.match.params;
    if (this.state.postSlug !== slug){
      this.setState({ postSlug: slug });
      this.props.onFetchBlogPost(slug);
    }
    if (this.props.blog_post !== prevProps.blog_post){
      let postID = this.props.blog_post.id;
      this.setState({ postID: postID });
    }
    if(this.state.postID !== prevState.postID){
      this.getComents();
    }
  }

  render() {

    let post = this.props.blog_post || 'Cargando ...';
    console.log(post);
    
    
    if ( post[1] !== undefined ) {
      return <NotFound path={this.props.location.pathname} />;
    }else{
      
      let user = this.props.user || 'Cargando ...';
      let comments = this.props.blog_comments || 'Cargando ...';
          
      let commentsItems = <div></div>;
      let hasComments = <div></div>;
  
      if (comments.count !== 0) {
        comments = comments.results;
        commentsItems = comments.map((comment) => {
          let timestamp = moment(comment.timestamp, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').fromNow();
          
          let html = (
            <div key={comment.id.toString()}>
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
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content) }}></div>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item">
                        <small>@johnDoe</small>&nbsp;<small>{timestamp}</small>
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
          );
          return html; 
        });
  
        hasComments = (
          <div className="container-fluid">
            <div className="has-background-moby">
              <div className="container is-padding-bottom-30">
                <div className="has-text-centered is-padding-y-30">
                  <h3 className="is-size-4">Ultimos Comentarios</h3>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    {commentsItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
  
      }
  
      let postImg = post.img || post.background || BaseImg;
      let postTimestamp = moment(post.created_at, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').fromNow() || '';
      let postText = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.text) }}></div> || (<div><h2>¿Qué es Lorem Ipsum?</h2><p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p></div>);
      let postAComment = <div>Cargando...</div>;
      
      if (user.isAuthenticated) {
        postAComment = <div>Puede postear</div>;
      } else {
        postAComment = (
          <div className="column">
            <div className="has-text-left ">
              <h3 className="is-size-2">Dejar un comentario</h3>
              <p className="is-size-6">Para dejar un comentario es necesario estar registrado</p>
            </div>
            <br></br>
            <div className="btns">
              <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
              <Link to="/auth/registro" className="button is-link">Registrarse</Link>
            </div>
          </div>
        );
      }
      return (
        <div>
          <Helmet title="Moby Supply - Titulo del post" />
          <div className="container" id="blogDetails">
            <div className="is-padding-top-30">
              <figure className="image is-3by1 box-animation"><img src={postImg} alt={post.title}></img></figure>
            </div>
            <div className="is-blog-content is-padding-top-30">
              {postText}
            </div>
            <div className="is-blog-author is-padding-top-30">
              <p className="has-text-right">
                <strong>John Doe</strong> <small>@johnDoe</small>&nbsp;<small>{postTimestamp}</small>
              </p>
            </div>
          </div>
          {hasComments}
          <div className="container is-padding-y-60">
            <div className="section has-background-light-green box-animation">
              <div className="columns">
                {postAComment}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const blogSelector = createSelector( state => state.blog_post, blog_post => blog_post );                          // blog_post
const blogComentsSelector = createSelector( state => state.blog_comments, blog_comments => blog_comments );       // blog_tags
const userSelector = createSelector( state => state.user, user => user );                                         // user

const mapStateToProps = createSelector(
  blogSelector,
  blogComentsSelector,
  userSelector,
  (blog_post, blog_comments, user) => (
    {
      blog_post,
      blog_comments,
      user,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBlogPost: requestBlogPost,
      onFetchComents: fetchBlogCommensts,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);