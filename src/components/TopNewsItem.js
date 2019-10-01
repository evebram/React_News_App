import React from 'react';
import './TopNewsItem.css';
import Collapsible from 'react-collapsible';

const TopNewsItem = (props) => {

  const handleClick = () => {
    props.topArticle.rating += 1;
    console.log(props.topArticle.rating);
  }


  return (
    <div className='top-story'>
      <h3>{props.topArticle.title}</h3>
      <h5>{props.topArticle.summary}</h5>
       <button onClick={handleClick}><Collapsible trigger="Full story" ><p>{props.topArticle.content}</p></Collapsible></button>
    </div>
  )
}

export default TopNewsItem;
