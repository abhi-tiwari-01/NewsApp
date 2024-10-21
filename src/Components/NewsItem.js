import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props;
    return (
      <div>
        <div className="card mx-2 my-2">
          <img
            src={!imageUrl ? 'http://alturl.com/u9eqq' : imageUrl}
            className="card-img-top"
            alt="..."
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />{' '}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span class="badge text-bg-dark">{source.name}</span>
            <p className="card-text">
              <small className="text-muted">
                Published on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
