import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>
                    <img src={logo} width={50} height={50} alt="logo" />
                    <h1>Reddit-Clone</h1>
                </div>
                <div className={styles.headerSearch}>
                    <form action="">
                        <input
                            type="search"
                            className={styles.headerSearchInput}
                            name=""
                            id=""
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
          
            </div>
        </div>
    );
}

export default Header;
