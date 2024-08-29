import React from 'react';
import './Css/Blog.css';

function BlogItem({ image, title, content }) {
  return (
    <div className="blog-item">
      <img src={image} alt={title} className="blog-image" />
      <h3 className="blog-title">{title}</h3>
      <p className="blog-content">{content}</p>
    </div>
  );
}

export default BlogItem;
