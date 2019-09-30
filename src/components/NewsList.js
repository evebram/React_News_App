import React from 'react';
import NewsItem from './NewsItem.js';


const NewsList = (props) => {


  const articleNodes = props.articles.map((article, index) => {
    return (
      <NewsItem key={index} article={article}></NewsItem>
    )
  })


return(
  <>
    <hr />
    {articleNodes}
  </>

)

}

export default NewsList;



// const topArticle = (arr) => {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (arr[j].rating > arr[j + 1].rating) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//
// }
