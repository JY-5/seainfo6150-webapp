import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

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
