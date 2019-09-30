import React from 'react';
import NewsItem from './NewsItem.js';

const NewsList = (props) => {

// const articleNodes = () => {
//   // if(!props.filteredArticles) {
//   //   props.articles.map( (article, index) => {
//   //     return (
//   //       <NewsItem key={index} article={article}></NewsItem>
//   //     )
//   //   })
//   // }
//   // else
//   // {
//     console.log("original array returned")
//     props.articles.map( (article, index) => {
//       return (
//         <NewsItem key={index} article={article}></NewsItem>
//       )
//     })
//   // }
// }

  const articleNodes = props.articles.map((article, index) => {
    return (
      <NewsItem key={index} article={article}></NewsItem>
    )
  })


return(
    <>
      {articleNodes}
    </>
  )
}

export default NewsList;
