'use client'

import styles from './Hero.module.css'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.grid}></div>
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.content}
                >
                    <span className={styles.badge}>Innovation meets Engineering</span>
                    <h1 className={styles.title}>
                        Software that <span>Scales</span> <br />
                        with Your Ambition.
                    </h1>
                    <p className={styles.description}>
                        OmniScaleSoft builds world-class digital products and robust custom software.
                        From innovative startups to enterprise-scale systems, we architect for the future.
                    </p>
                    <div className={styles.actions}>
                        <button className={styles.primary}>Build your vision</button>
                        <button className={styles.secondary}>Explore our work</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.visual}
                >
                    {/* Minimalist Blueprint SVG placeholder */}
                    <div className={styles.blueprint}>
                        <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M50 250 L150 150 L250 180 L350 80 L450 120" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
                            <circle cx="50" cy="250" r="4" fill="var(--accent)" />
                            <circle cx="150" cy="150" r="4" fill="var(--accent)" />
                            <circle cx="250" cy="180" r="4" fill="var(--accent)" />
                            <circle cx="350" cy="80" r="4" fill="var(--accent)" />
                            <circle cx="450" cy="120" r="4" fill="var(--accent)" />
                            <rect x="100" y="50" width="80" height="40" rx="4" stroke="var(--border-color)" strokeWidth="1" />
                            <rect x="300" y="200" width="100" height="50" rx="4" stroke="var(--border-color)" strokeWidth="1" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
