import React from 'react';


const Category = ({filterArray}) => {


  const handleClick = ({target: {value}}) => {
    filterArray(value);
  }

  return (
    <>
      <button value="a" onClick={handleClick}>All</button>
      <button value="BBC News" onClick={handleClick}>Sport</button>
      <button value="Daily Mail" onClick={handleClick}>Politics</button>
      <button value="Mirror" onClick={handleClick}>Business</button>
      <button value="Tech" onClick={handleClick}>Tech</button>
      <button value="Science" onClick={handleClick}>Science</button>
      <button value="Education" onClick={handleClick}>Education</button>
      <button value="Health" onClick={handleClick}>Health</button>
      <button value="Entertainment" onClick={handleClick}>Entertainment</button>
      <button value="Crime" onClick={handleClick}>Crime</button>
    </>
  )
}

export default Category;
