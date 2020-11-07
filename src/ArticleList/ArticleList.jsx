import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
    return (
        <ul className={styles.list}>
            {props.articles.map((listItem) => (
                <li key={listItem.slug} className={styles.article}><ArticleListItem article={listItem}/></li>
            ))}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;
