import React, {Component} from 'react';
import Category from '../components/Category.js';

import NavBar from '../components/NavBar.js';
import Home from '../components/Home.js';
import NewArticleForm from '../components/NewArticleForm.js';
import NewJournalistForm from '../components/NewJournalistForm.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    this.filterArrayAll = this.filterArrayAll.bind(this);
  };

  componentDidMount() {
    const url = "http://localhost:8080/articles";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles._embedded.articles}))
    .catch(err => console.error);
  }

  filterArray(value) {
      this.setState({category: value})
      var articlesByCategory = this.state.articles.filter(function(el) {
        el.categories.forEach(function(category) {
          if(category.name.includes(value)) {
            return el;
          }
        })
      })
      this.setState({filteredArticles: articlesByCategory})
  }

  filterArrayAll() {
    var articlesByCategory = this.state.articles
    this.setState({filteredArticles: articlesByCategory})
  }


  render() {
     return(
       <>
         <h1>The News</h1>
         <Category filterArray={this.filterArray} />
         <Router>
          <React.Fragment>
            <NavBar />
              <Switch>
                <Route
                exact path="/"
                render={() => <Home articles={this.state.articles} filteredArticles={this.state.filteredArticles}/>}
                />
                <Route path="/article" component={NewArticleForm} />
              </Switch>
          </React.Fragment>
         </Router>
       </>
     )
  }

}

export default NewsContainer;



// <Route path="/journalist" component={NewJournalistForm} />
