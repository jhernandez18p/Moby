import React, { Component } from "react";
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

class Post extends Component {
  render() {
    let post = this.props.post;

    return (
      <div className="column">
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
              <Link to={`/blog?tag=${post.tag ? post.tag : 'Evanistería'}`} className="has-text-black">
                {post.tag ? post.tag : 'Evanistería'}
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

export default Post;