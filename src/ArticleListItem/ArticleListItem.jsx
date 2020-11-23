import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage";

const ArticleListItem = (props) => {
    const [ifClicked, setClicked] = useState(false);

    function changeClick() {
      setClicked(!ifClicked);
    }

    let textOnButton;
    let displayContent;
    if (!ifClicked) {
      textOnButton = "Show more";
      displayContent = null;
    } else {
      textOnButton = "Show less";
      displayContent = (
        <div className={styles.content}> 
          <p className={styles.text}>{props.article.shortText}</p>
          <time dateTime={props.article.timeStamp} className={styles.articleTime}>{props.article.displayDate}</time>
        </div>
      );
    }

    return (
      <section className={styles.container}>
        <ArticleImage title={props.article.title} url={props.article.image._url}/>
        <h1 className={styles.title}>{props.article.title}</h1>
        {displayContent}
        <ArticleTextToggleButton buttonText={textOnButton} onClick={changeClick}/>
      </section>
    );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;