import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
        <h1>{props.article.title}</h1>
        <address>
          <i>by {props.article.author} (
              <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)</i>
          <br />
        </address>
          <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      {/* this is an example of how you insert props into a react component */}
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
