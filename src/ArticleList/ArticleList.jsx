import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
    return (
        <ul>
            {props.articles.map((listItem) => (
                <li key={listItem.slug}><ArticleListItem article={listItem}/></li>
            ))}
        </ul>
    );
};

export default ArticleList;
