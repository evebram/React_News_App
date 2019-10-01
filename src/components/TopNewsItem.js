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
      <div className='top-story-objects'>
        <img src={props.topArticle.picUrl} alt={props.topArticle.picUrl} />
        <div className='top-story-info'>
          <h4>{props.topArticle.title}</h4>
          <h6>{props.topArticle.summary}</h6>
        </div>
      </div>
       <button onClick={handleClick}><Collapsible trigger="| Full story |" >
       <p>{props.topArticle.content}</p>
       <p>{props.topArticle.journalist.firstName} {props.topArticle.journalist.lastName}...</p>
       </Collapsible></button>
    </div>
  )
}

export default TopNewsItem;
