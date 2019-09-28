import React from 'react';
import NewsItem from './NewsItem.js';


const NewsList = (props) => {


  const articleNodes = props.filteredArticles.map((article, index) => {
    return (
      <NewsItem key={index} article={article}></NewsItem>
    )
  })





return(
  <>
    <hr />
    <h2>News List</h2>
    {articleNodes}
  </>

)

}

export default NewsList;
