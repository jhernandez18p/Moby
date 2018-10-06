import React, { Component } from "react";
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// action
import { fetchBlogSingleTag } from '../../redux/actions/blog/tags';

class Post extends Component {
  
  componentDidMount(){
    this.props.onFetchBlogTag(this.props.post.tag);
  }

  render() {
    let post = this.props.post;
    let tag = this.props.blog_tag.title;

    return (
      <div>
        <div className="recent-feed">
          <div className="feed-img">
            <Link to={`/blog/${post.slug ? post.slug : post.id}`}>
              <img src={post.background ? post.background : post.img} alt={post.title} ></img>
            </Link>
          </div>
          <div className="feed-title">
            <h3 className="is-size-4">
              <Link to={`/blog/${post.slug ? post.slug : post.id}`} className="has-text-black">
                {post.title}
              </Link>
            </h3>
          </div>
          <div className="feed-leyend is-clearfix">
            <p className="is-size-7 is-pulled-left">
              <span className="icon">
                <i className="fas fa-folder-open"></i>
              </span>
              <Link to={`/blog?tag=${tag}`} className="has-text-black">
                {tag}
              </Link>
            </p>
            <p className="is-size-7 is-pulled-right">
              <span className="icon">
                <i className="fa fa-clock"></i>
              </span>
              {post.published}
            </p>
          </div>
          <div className="feed-content">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.short_text) }}></div>
          </div>
        </div>
      </div>
    );
  }
}

// blog_tags
const blogTagSelector = createSelector(
  state => state.blog_tag,
  blog_tag => blog_tag
);

const mapStateToProps = createSelector(
  blogTagSelector,
  (blog_tag) => (
    {
      blog_tag,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBlogTag: fetchBlogSingleTag,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);