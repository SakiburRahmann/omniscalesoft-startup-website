'use client'

import styles from './DualService.module.css'
import { motion } from 'framer-motion'

export default function DualService() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Dual Forces of Innovation</h2>
                    <p className={styles.sectionSubtitle}>
                        We build our own products and scale yours. A hybrid approach to software excellence.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Venture Studio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.card}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🚀</div>
                            <h3>The Venture Studio</h3>
                            <p>
                                This is our innovation lab. We conceive, design, and launch our own startup products.
                                From education platforms to market-disrupting apps, we build what the world needs next.
                            </p>
                            <ul className={styles.list}>
                                <li>Market Research & Validation</li>
                                <li>Product MVP Development</li>
                                <li>Scale-up & Growth Strategy</li>
                            </ul>
                            <button className={styles.link}>Explore our products →</button>
                        </div>
                        <div className={styles.decoration}>STUDIO</div>
                    </motion.div>

                    {/* Software Agency */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={styles.card}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🛠️</div>
                            <h3>The Software Agency</h3>
                            <p>
                                We partner with select companies to architect more robust, scalable software.
                                Whether you're a funded startup or an established enterprise, we are your elite engineering arm.
                            </p>
                            <ul className={styles.list}>
                                <li>Custom Web & Mobile Apps</li>
                                <li>Legacy System Modernization</li>
                                <li>Cloud Infrastructure Scaling</li>
                            </ul>
                            <button className={styles.link}>Talk about your project →</button>
                        </div>
                        <div className={styles.decoration}>AGENCY</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
