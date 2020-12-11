import React from "react";
import styles from "./FeedbackPanel.module.scss";
import sad from '../../assets/sad.svg'
const FeedbackPanel = (props) => {
    const { header, text } = props;
    return (
        <section className={styles.feedback}>
        <div >
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
        <img src={sad} alt="no results"></img>
        </section>
    );
};

export default FeedbackPanel;
