import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./RootLayout.module.css";

function RootLayout() {
    return (
        <div className={styles.root}>
            <Header />
            <main>
                <div className={styles.mainContainer}>
                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                    <div className={styles.sidebar}>
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RootLayout;
