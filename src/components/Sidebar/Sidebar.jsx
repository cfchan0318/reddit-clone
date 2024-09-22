import React from "react";
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarButtons}>
                <button className={styles.sidebarButton}>Best</button>
                <button className={styles.sidebarButton}>New</button>
                <button className={styles.sidebarButton}>Popular</button>
            </div>
            <ul className={styles.subredditList}>
                <li className={styles.subreddit}>Home</li>
            </ul>
        </div>
    );
}

export default Sidebar;
