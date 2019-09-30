import React from 'react';
import './TopNewsItem.css';

const TopNewsItem = (props) => {


  return (
    <div className='top-story'>
      <h2>{props.topArticle.title}</h2>
    </div>
  )
}

export default TopNewsItem;
