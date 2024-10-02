import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../slices/sidebarSlice";
import { fetchSubreddits } from "../../slices/sidebarSlice";
import { Link } from "react-router-dom";

function Sidebar() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.sidebar.mode);
    const subreddits = useSelector((state) => state.sidebar.subreddits);

    useEffect(() => {
        dispatch(fetchSubreddits({ mode: mode }));
    }, [mode, dispatch]);
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
                {subreddits.data?.children?.map((subreddit, i) =>
                    subreddit.data ? (
                        <li className={styles.subreddit}>
                            <Link className={styles.subreddit} to={`/?subreddit=${subreddit.data.display_name}`}>{subreddit.data.display_name}</Link>
                        </li>
                    ) : (
                        <div />
                    )
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
