import React from "react";
import TopNewsList from "./TopNewsList.js";
import NewsList from "./NewsList.js";
import Category from "./Category.js";

const Home = (props) => {
  return(
  <div>
    <Category filterArray={props.filterArray} filterArrayAll={props.filterArrayAll} />
    <TopNewsList  filteredArticles={props.filteredArticles} articles={props.articles} />
    <NewsList  filteredArticles={props.filteredArticles} articles={props.articles} category={props.category} />
  </div>
  )
};

export default Home;
