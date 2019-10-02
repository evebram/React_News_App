import React from 'react';
import './css/TopNewsItem.css';
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
          <h2>{props.topArticle.title}</h2>
          <h4>{props.topArticle.summary}</h4>
        </div>
      </div>
       <button onClick={handleClick}><Collapsible trigger="| Full story |" >
       <p>{props.topArticle.content}</p>
       <div className='journalist-tag'>
         <a href="">See more stories by {props.topArticle.journalist.firstName} {props.topArticle.journalist.lastName}...</a>
       </div>
       </Collapsible></button>
    </div>
  )
}

export default TopNewsItem;
