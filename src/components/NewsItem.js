import React from 'react';


const NewsItem = (props) => {


  return (
    <>
      <hr />
      <h2>{props.article.title}</h2>
      <h4>{props.article.author}</h4>
      <p>{props.article.description}</p>
      <p>{props.article.source.name}</p>
    </>
  )
}

export default NewsItem;
