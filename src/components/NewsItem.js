import React from 'react';
import './NewsItem.css';
import Collapsible from 'react-collapsible';
const NewsItem = (props) => {

  const handleClick = () => {
    let updatedRating = props.article.rating + 1;
    props.updateRating(props.article.id, updatedRating)
  }

 return (
   <div className='story-list'>
     <hr />
     <div className='story-list-objects'>
       <img src={props.article.picUrl} alt={props.article.picUrl} />
       <div className='story-list-info'>
         <h2>{props.article.title}</h2>
         <h4>{props.article.summary}</h4>
       </div>
      </div>
     <button onClick={handleClick}><Collapsible trigger="| Full story |" ><p>{props.article.content}</p></Collapsible></button>
   </div>
 )
}
export default NewsItem;
