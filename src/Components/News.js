import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string    
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const API_KEY = "679488ec797a4381a52e7894cc85fb26";
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
        loading: true,
      }),
      () => this.fetchNews()
    );
  };

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
          loading: true,
        }),
        () => this.fetchNews()
      );
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center my-5 text-white">
          NewsApp - Top Headlines
        </h1>
        
        {/* Show spinner when loading */}
        {this.state.loading && <Spinner />}
        
        {/* Display articles only when not loading */}
        {!this.state.loading && (
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 80) : ''
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        )}

        <div className="container d-flex justify-content-center my-5">
          <button
            disabled={this.state.page <= 1 || this.state.loading}  // Disable when loading
            type="button"
            className="btn btn-light mx-3"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-light mx-3"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) || this.state.loading
            }  // Disable when loading
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
