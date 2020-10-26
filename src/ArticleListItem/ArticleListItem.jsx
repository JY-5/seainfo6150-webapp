import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

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
        <div className="display-content"> 
          <p>{props.article.shortText}</p>
          <p><time dateTime={props.article.timeStamp}>{props.article.displayDate}</time></p>
        </div>
      );
    }

    return (
      <section>
        <header>
          <h1>{props.article.title}</h1>
        </header>
        {displayContent}
        <ArticleTextToggleButton buttonText={textOnButton} onClick={changeClick}/>
      </section>
    );
};

export default ArticleListItem;