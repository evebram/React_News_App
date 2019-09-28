import React, {Component} from 'react';
import TopStory from '../components/TopStory.js';
import Category from '../components/Category.js';
import NewsList from '../components/NewsList.js';
import Main from '../components/Main.js'

class NewsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      filteredArticles: [],
      currentArticle: null,
      category: null,
    };
    this.filterArray = this.filterArray.bind(this);
    this.setfilteredArray = this.setfilteredArray.bind(this);
  };

  componentDidMount() {
    const url = "http://localhost:8080/articles";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles._embedded.articles}))
    .catch(err => console.error);
  }

  setfilteredArray() {
    this.setState({filteredArticles: this.state.articles})
  }

  filterArray(value) {
      this.setState({category: value})
      var articlesByCategory = this.state.articles.filter(function (el) {
        if(el.source.name.includes(value)) {
          return el;
        }
      })
      this.setState({filteredArticles: articlesByCategory})
  }

  render() {
     return(
       <>
         <h1>The News</h1>
         <Main />
         <Category filterArray={this.filterArray} />
         <TopStory />
         <NewsList  filteredArticles={this.state.filteredArticles} articles={this.state.articles} />
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
