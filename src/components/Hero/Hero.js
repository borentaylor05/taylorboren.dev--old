import React from 'react'
import Img from 'gatsby-image'

import styles from './Hero.module.css'

function Hero({ data }) {
    return (
        <div className={styles.hero}>
            <Img
                className={styles.heroImage}
                alt={data.name}
                fluid={data.heroImage.fluid}
            />
            <div className={styles.heroDetails}>
                <h3 className={styles.heroHeadline}>{data.name}</h3>
                <p className={styles.heroTitle}>{data.title}</p>
                <p>{data.shortBio.shortBio}</p>
            </div>
        </div>
    )
}

export default Hero
