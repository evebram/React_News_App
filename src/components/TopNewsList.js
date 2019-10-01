import React from 'react';
import TopNewsItem from './TopNewsItem.js';

const TopNewsList = (props) => {

  const filteredArray = props.articles.sort(function(a, b) {
    return b.rating - a.rating
  })[0];


//sorts articles
  const allArticlesSorted = props.articles.sort(function(a, b) {
    return b.rating - a.rating
  })[0];

//sorts filteredArticles
  const categoryArticlesSorted = props.filteredArticles.sort(function(a, b) {
    return b.rating - a.rating
  })[0];


  const articleNodes = () => {
    let filteredNodes;

    if(!props.category) {
      console.log("this should return articles")
      filteredNodes = this.allArticlesSorted
    }

  }



  if (!filteredArray) {
    return null;
  } else {
      return(
      <>
      <hr />
      {articleNodes()}
      <TopNewsItem topArticle={filteredArray}></TopNewsItem>
    </>
    )
  }
}



export default TopNewsList;



// const filteredArray = () => {
//   let filteredNodes;
//
//   if(!props.category) {
//     filteredNodes = props.articles.sort(function(a, b) {
//       return b.rating - a.rating
//     })[0];
//     return filteredNodes
//   } else {
//     filteredNodes = props.filteredArticles.sort(function(a, b) {
//       return b.rating - a.rating
//     })[0];
//   }
//   return filteredNodes;
// }
