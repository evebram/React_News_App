import React from 'react';
import './TopNewsItem.css';

const TopNewsItem = (props) => {


  return (
    <div className='top-story'>
      <h3>{props.topArticle.title}</h3>
      <h5>{props.topArticle.summary}</h5>
    </div>
  )
}

export default TopNewsItem;
