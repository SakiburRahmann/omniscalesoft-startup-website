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
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }}
                    className={styles.content}
                >
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <span className={styles.badge}>Innovation meets Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className={styles.title}
                    >
                        Software that <span>Scales</span> <br />
                        with Your Ambition.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.description}
                    >
                        OmniScaleSoft builds world-class digital products and robust custom software.
                        From innovative startups to enterprise-scale systems, we architect for the future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={styles.actions}
                    >
                        <button className={styles.primary}>Build your vision</button>
                        <button className={styles.secondary}>Explore our work</button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.visual}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className={styles.blueprint}
                    >
                        {/* Minimalist Blueprint SVG placeholder */}
                        <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M50 250 L150 150 L250 180 L350 80 L450 120" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
                            <circle cx="50" cy="250" r="4" fill="var(--accent)" />
                            <circle cx="150" cy="150" r="4" fill="var(--accent)" />
                            <circle cx="250" cy="180" r="4" fill="var(--accent)" />
                            <circle cx="350" cy="80" r="4" fill="var(--accent)" />
                            <circle cx="450" cy="120" r="4" fill="var(--accent)" />
                            <rect x="100" y="50" width="80" height="40" rx="4" stroke="var(--border-color)" strokeWidth="1" />
                            <rect x="300" y="200" width="100" height="50" rx="4" stroke="var(--border-color)" strokeWidth="1" />

                            {/* Animated Pulse */}
                            <motion.circle
                                cx="50" cy="250" r="10"
                                stroke="var(--accent)" strokeWidth="1" fill="transparent"
                                animate={{ r: [10, 20], opacity: [0.8, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                            <motion.circle
                                cx="450" cy="120" r="10"
                                stroke="var(--accent)" strokeWidth="1" fill="transparent"
                                animate={{ r: [10, 20], opacity: [0.8, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
