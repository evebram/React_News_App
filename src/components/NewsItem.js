import React from 'react';
import './NewsItem.css';
import Collapsible from 'react-collapsible';
const NewsItem = (props) => {

  const handleClick = () => {
    props.article.rating += 1;
    console.log(props.article.rating);
  }

 return (
   <>
     <hr />
     <h4>This comes from news item</h4>
     <div className='image-box'>
       <img src={props.article.picUrl} alt={props.article.picUrl} />
     </div>
     <h2>{props.article.title}</h2>
     <h4>{props.article.summary}</h4>
     <button onClick={handleClick}><Collapsible trigger="Full story" ><p>{props.article.content}</p></Collapsible></button>
   </>
 )
}
export default NewsItem;
