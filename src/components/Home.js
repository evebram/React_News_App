import React from "react";
import TopStory from "./TopStory.js";
import NewsList from "./NewsList.js";

const Home = (props) => {
  return(
  <div>
    <TopStory />
    <NewsList  filteredArticles={props.filteredArticles} articles={props.articles} />
  </div>
  )
};

export default Home;
