import React, {Component} from 'react';
import TopStory from '../components/TopStory.js';
import Category from '../components/Category.js';
import NewsList from '../components/NewsList.js';
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
         <Category filterArray={this.filterArray} />
         <Router>
          <React.Fragment>
            <NavBar />
              <Switch>
                <Route
                exact path="/"
                render={() => <Home articles={this.state.articles}/>}
                />
                <Route path="/article" component={NewArticleForm} />
                <Route path="/journalist" component={NewJournalistForm} />
              </Switch>
          </React.Fragment>
         </Router>



       </>
     )
  }

}

export default NewsContainer;
