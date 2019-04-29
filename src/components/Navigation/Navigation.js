import React from 'react'
import { Link } from 'gatsby'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav className="Navigation" role="navigation">
            <ul className={styles.Navigation}>
                <li className={styles.Navigation__item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.Navigation__item}>
                    <Link to="/resume">Resume</Link>
                </li>
                <li className={styles.Navigation__item}>
                    <Link to="/essays/">Essays</Link>
                </li>
                <li className={styles.Navigation__item}>
                    <Link to="/book-reviews/">Book Reviews</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
