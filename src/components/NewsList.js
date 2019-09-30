import React from 'react';
import NewsItem from './NewsItem.js';

const NewsList = (props) => {


const articleNodes = () => {
  let filteredNodes;

  if(!props.category) {
    filteredNodes = props.articles.map( (article, index) => {
      return (
        <NewsItem key={index} article={article}></NewsItem>
      )
    })
  }
  else
  {
    filteredNodes = props.filteredArticles.map( (article, index) => {
      return (
        <NewsItem key={index} article={article}></NewsItem>
      )
    })
  }

  return filteredNodes
}

return(
    <>
      {articleNodes()}
    </>
  )
}

export default NewsList;
