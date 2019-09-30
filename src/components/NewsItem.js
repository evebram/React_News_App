import React from 'react';
import './NewsItem.css';
import Collapsible from 'react-collapsible';
const NewsItem = (props) => {
 return (
   <>
     <hr />
     <div className='image-box'>
       <img src={props.article.picUrl} alt={props.article.picUrl} />
     </div>
     <h2>{props.article.title}</h2>
     <h4>{props.article.summary}</h4>
     <Collapsible trigger="Full story"><p>{props.article.content}</p></Collapsible>
   </>
 )
}
export default NewsItem;
