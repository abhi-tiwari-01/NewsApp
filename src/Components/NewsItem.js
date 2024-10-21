import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card mx-2 my-2">
          <img
            src={
              !imageUrl
                ? 'http://alturl.com/u9eqq'
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            // style={{ width: '337px', height: '200px' }}
          />{' '}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
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
