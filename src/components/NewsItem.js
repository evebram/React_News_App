import React from 'react';


const NewsItem = (props) => {


  return (
    <>
      <hr />
      <h2>{props.article.title}</h2>
      <h4>{props.article.summary}</h4>

    </>
  )
}

export default NewsItem;
