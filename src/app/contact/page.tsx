'use client'

import styles from './page.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.title}
                >
                    Contact.
                </motion.h1>
                <p className={styles.subtitle}>Choose your path.</p>
            </div>

            <div className={styles.splitLayout}>
                <Link href="/contact/inquire" className={styles.section}>
                    <span className={styles.label}>For Clients</span>
                    <h2>Start a Project</h2>
                    <p>We work with Series B+ startups and Enterprise teams to build mission-critical infrastructure.</p>
                    <button className={styles.button}>Inquire Now &rarr;</button>
                </Link>

                <Link href="/contact/careers" className={`${styles.section} ${styles.talent}`}>
                    <span className={styles.label}>For Talent</span>
                    <h2>Join the Team</h2>
                    <p>We are always looking for exceptional engineers who obsess over performance and quality.</p>
                    <button className={styles.button}>View Openings &rarr;</button>
                </Link>
            </div>
        </main>
    )
}
