import React from 'react';


const Category = ({filterArray, filterArrayAll}) => {


  const handleClick = ({target: {value}}) => {
    filterArray(value);
  }

  const handleClickAll = () => {
    filterArrayAll();
  }

  return (
    <>
      <button onClick={handleClickAll}>All Stories</button>
      <button value="Sport" onClick={handleClick}>Sport</button>
      <button value="Politics" onClick={handleClick}>Politics</button>
      <button value="Business" onClick={handleClick}>Business</button>
      <button value="Environment" onClick={handleClick}>Environment</button>
      <button value="Science" onClick={handleClick}>Science</button>
      <button value="Education" onClick={handleClick}>Education</button>
      <button value="Health" onClick={handleClick}>Health</button>
      <button value="Entertainment" onClick={handleClick}>Entertainment</button>
      <button value="Crime" onClick={handleClick}>Crime</button>
    </>
  )
}

export default Category;
