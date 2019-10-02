import React, {Component} from 'react';
import Category from '../components/Category.js';

import Header from '../components/Header.js';
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
    this.updateRating = this.updateRating.bind(this);
    this.updateRatingLocal = this.updateRatingLocal.bind(this);
    this.handleJournalistPost = this.handleJournalistPost.bind(this);
  };



  componentDidMount() {
    const url = "http://localhost:8080/articles";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles._embedded.articles}))
    .catch(err => console.error);
  }

  filterArray(selectedCategory) {
      this.setState({category: selectedCategory})
      const articlesByCategory = []
       this.state.articles.filter(function(articleObject) {
        articleObject.categories.forEach(function(category) {
          if(category.name.includes(selectedCategory)) {
            articlesByCategory.push(articleObject);
          }
        })
      })
      this.setState({filteredArticles: articlesByCategory})
  }

//update rating for article popularity
  updateRatingLocal(id, newRating){
    let articlesToModify = [...this.state.articles]
    let index = articlesToModify.findIndex(article => article.id === id)
    articlesToModify[index].rating = newRating;
    this.setState(articlesToModify)
  }

  updateRating(id, newRating){
    const url = `http://localhost:8080/articles/${id}`
    let updatedRating = { rating: newRating}
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(updatedRating),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.error);
    this.updateRatingLocal(id, newRating);
  }

//create new journalist
  handleJournalistPost(journalist) {
    const url = `http://localhost:8080/journalists`
    let newJournalist = journalist
    const request = new Request();
    request.post('/journalists', journalist).then(() => {
      window.location = '/journalists'
    })
  }


  filterArrayAll() {
    const articlesByCategory = this.state.articles
    this.setState({filteredArticles: articlesByCategory})
  }



  render() {
     return(
       <>
         <Header />
         <Router>
          <React.Fragment>
            <NavBar />
              <Switch>
                <Route
                exact path="/"
                render={() => <Home filterArray={this.filterArray} filterArrayAll={this.filterArrayAll} articles={this.state.articles} filteredArticles={this.state.filteredArticles} category={this.state.category}
                updateRating={this.updateRating}/>}
                />
                <Route path="/article" component={NewArticleForm} />
                <Route path="/journalist" component={NewJournalistForm}
                />

              </Switch>
          </React.Fragment>
         </Router>
       </>
     )
  }

}

export default NewsContainer;



// <Route path="/journalist" component={NewJournalistForm} />


// <Route path="/journalist"
// render={() => <NewJournalistForm handleJournalistPost={this.handleJournalistPost}/>}
// />
