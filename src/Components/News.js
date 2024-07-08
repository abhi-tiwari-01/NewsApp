import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
      source: {
        id: 'usa-today',
        name: 'USA Today',
      },
      author: 'Jace Evans',
      title:
        'UFC 303 live results: Alex Pereira vs Jiri Prochazka fight, stream - USA TODAY',
      description:
        'The rematch between Alex Pereira and Jiri Prochazka headlines UFC 303. Follow along for complete results and highlights.',
      url: 'https://www.usatoday.com/story/sports/ufc/2024/06/29/ufc-303-live-results-highlights-alex-pereira-jiri-prochazka-card/74251503007/',
      urlToImage:
        'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/29/USAT/74254107007-usatsi-21881335.jpg?crop=4486,2522,x0,y121&width=3200&height=1800&format=pjpg&auto=webp',
      publishedAt: '2024-06-30T03:50:17Z',
      content:
        "UFC 303 was supposed to mark Conor McGregor's return to the octagon. But his highly-anticipated bout against Michael Chandler was scuttled (for now) due to an injury McGregor suffered in the lead-up … [+9936 chars]",
    },
    {
      source: {
        id: 'cbs-news',
        name: 'CBS News',
      },
      author: null,
      title:
        'Beryl strengthens into a Category 1 hurricane in the Atlantic as it bears down on Caribbean - CBS News',
      description:
        'Hurricane Beryl is forecast to strengthen into a "dangerous major hurricane" before reaching Barbados and the Windward Islands late Sunday.',
      url: 'https://www.cbsnews.com/news/hurricane-beryl-atlantic-approaching-caribbean/',
      urlToImage:
        'https://assets2.cbsnewsstatic.com/hub/i/r/2024/06/30/6be6085d-8523-4f5e-be89-8bdeb48f2dbb/thumbnail/1200x630/82e3a7aeb70a3197fef6a4037ae11b00/beryl-43.jpg?v=a23cb4bdf4fa7f3cb72e5118085577f9',
      publishedAt: '2024-06-30T03:23:48Z',
      content:
        'Beryl became a hurricane on Saturday as it churned toward the southeast Caribbean, with forecasters warning it was expected to strengthen into a "dangerous major hurricane" before reaching Barbados a… [+5638 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hollywood Reporter',
      },
      author: 'Ryan Gajewski',
      title:
        'Josh Lucas Engaged to Meteorologist Brianna Ruffalo - Hollywood Reporter',
      description:
        "The 'Yellowstone' and 'Palm Royale' star posted that his fiancée \"has made me and my life better, deeper and more whole.\"",
      url: 'http://www.hollywoodreporter.com/lifestyle/lifestyle-news/josh-lucas-engaged-brianna-ruffalo-1235935684/',
      urlToImage:
        'https://www.hollywoodreporter.com/wp-content/uploads/2024/06/GettyImages-2085185735.jpg?w=1024',
      publishedAt: '2024-06-30T02:03:11Z',
      content:
        'Josh Lucas is engaged to meteorologist Brianna Ruffalo, with the actor announcing the news Saturday. \r\nLucas, whose recent credits include Yellowstone and Palm Royale, took to Instagram to share foot… [+1419 chars]',
    },    
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=679488ec797a4381a52e7894cc85fb26';
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      // Ensure parsedData.articles is defined before setting the state
      this.setState({ articles: parsedData.articles || [] });
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 60) : ''
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
