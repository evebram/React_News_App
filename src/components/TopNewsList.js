import React from 'react';
import TopNewsItem from './TopNewsItem.js';


const TopNewsList = (props) => {


  const filteredArray = props.articles.sort(function(a, b) {
    return b.rating - a.rating
  })[0];

  if (!filteredArray) {
    return null;
  } else {
      return(
      <>
      <hr />
      <TopNewsItem topArticle={filteredArray}></TopNewsItem>
    </>
    )
  }
}


export default TopNewsList;
