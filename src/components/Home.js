import React from "react";
import NewsList from "./NewsList.js";

const Home = (props) => {
  return(
  <div>
    <NewsList  filteredArticles={props.filteredArticles} articles={props.articles} />
  </div>
  )
};

export default Home;
