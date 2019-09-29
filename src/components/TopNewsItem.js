import React from 'react';
import './TopNewsItem.css';

const TopNewsItem = (props) => {


  return (
    <div className='top-story'>
      <h2>Top Article</h2>
      <h2>{props.topArticle[0].title}</h2>
    </div>
  )
}

export default TopNewsItem;
