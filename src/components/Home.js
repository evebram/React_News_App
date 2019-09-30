import React from "react";
import TopNewsList from "./TopNewsList.js";
import NewsList from "./NewsList.js";

const Home = (props) => {
  return(
  <div>
    <TopNewsList  filteredArticles={props.filteredArticles} articles={props.articles} />
    <NewsList  filteredArticles={props.filteredArticles} articles={props.articles} />
  </div>
  )
};

export default Home;
