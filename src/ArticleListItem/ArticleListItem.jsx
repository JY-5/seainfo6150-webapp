import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = (props) => {
    return (
      <section>
        <header>
          <h1>{props.article.title}</h1>
        </header>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        <p>{props.article.shortText}</p>
      </section>
    );
};

export default ArticleListItem;