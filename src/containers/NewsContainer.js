import React, {Component} from 'react';
import TopStory from '../components/TopStory.js';
import NewsList from '../components/NewsList.js';
import NewsItem from '../components/NewsItem.js';


class NewsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

      articles: [],
      currentArticle: null,

    };
  };

  componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=44c6ad3bc0c34ee4b0a016ff6ab95cca";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles.articles}))
    .catch(err => console.error);
  }





  render() {
     return(
       <>
         <h1>The News</h1>
         <TopStory />
         <NewsList  articles={this.state.articles}/>
       </>
     )
  }
}

export default NewsContainer;














// article: [
//   {
//     id: 1,
//     category: 'sport',
//     content: "textextextextextexttextextextextextexttextextextextextexttextextextextextexttextextextextextext",
//     date: '21/10/2019',
//     rating: 3,
//     summary: "textextextextextext",
//     journalist: "Eve Bramley",
//   },
//   {
//     id: 2,
//     category: 'buisness',
//     content: "textextextextextexttextextextextextexttextextextextextexttextextextextextexttextextextextextext",
//     date: '22/10/2019',
//     rating: 2,
//     summary: "textextextextextext",
//     journalist: "Ben Hutchison",
//   },
// ]
