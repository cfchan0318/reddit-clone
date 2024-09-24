import React from "react";
import styles from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../slices/sidebarSlice";

function Sidebar() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.sidebar.mode);

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Subreddits</h2>
            <div className={styles.sidebarButtons}>
                <button
                    className={`${styles.sidebarButton} 
                    ${mode === "default" ? styles.active : ""}`}
                    onClick={() => {
                        dispatch(toggleMode("default"));
                    }}>
                    Best
                </button>
                <button
                    className={`${styles.sidebarButton} 
                    ${mode === "new" ? styles.active : ""}`}
                    onClick={() => {
                        dispatch(toggleMode("new"));
                    }}>
                    New
                </button>
                <button
                    className={`${styles.sidebarButton} 
                    ${mode === "popular" ? styles.active : ""}`}
                    onClick={() => {
                        dispatch(toggleMode("popular"));
                    }}>
                    Popular
                </button>
            </div>
            <ul className={styles.subredditList}>
                <li className={styles.subreddit}>Home</li>
            </ul>
        </div>
    );
}

export default Sidebar;
