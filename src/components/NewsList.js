import React from 'react';
import NewsItem from './NewsItem.js';
import TopNewsItem from './TopNewsItem.js';


const NewsList = (props) => {
  // take news array and check for highest rating value
  // move highest rated article to start of array and pass to topNewsItem
  const arr = props.articles

  const topArticle = (arr, index) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return (
      <TopNewsItem key={index} topArticle={topArticle}></TopNewsItem>
    )
  }

  //pass arr to articlenodes below. Remove first object order by date then iterate through remaining objects


  const articleNodes = props.articles.map((article, index) => {
    return (
      <NewsItem key={index} article={article}></NewsItem>
    )
  })


return(
  <>
    <hr />
    {topArticle}
    {articleNodes}
  </>

)

}

export default NewsList;
