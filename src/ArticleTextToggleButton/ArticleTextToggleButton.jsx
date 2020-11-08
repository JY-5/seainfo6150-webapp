import React from "react";
import styles from "./ArticleTextToggleButton.module.css";
import PropTypes from "prop-types";

const ArticleTextToggleButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.toggleButton}>{props.buttonText}</button>
    )
};

ArticleTextToggleButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default ArticleTextToggleButton;