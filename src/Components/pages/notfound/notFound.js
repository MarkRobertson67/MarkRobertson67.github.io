
import React from "react";
import styles from './notFound.module.css';

function NotFound() {
    return (
        <div className={styles["not-found-container"]}>
            <h1 className={styles["not-found-title"]}>404 - Page Not Found</h1>
            <p className={styles["not-found-message"]}>
                Sorry, the page you requested does not exist
            </p>
        </div>
    )
}

export default NotFound
