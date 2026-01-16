'use client'

import styles from './page.module.css'
import { motion } from 'framer-motion'

export default function Work() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.title}
                >
                    Selected Work.
                </motion.h1>
            </section>

            <section className={styles.list}>
                {[
                    { year: '2025', title: 'FinTech Core', desc: 'Rebuilding the payment infrastructure for a Series B Neo-bank.', tag: 'System Architecture' },
                    { year: '2024', title: 'HealthGuard AI', desc: 'Diagnostic imaging analysis pipeline using computer vision.', tag: 'Machine Learning' },
                    { year: '2024', title: 'LogisticsPro', desc: 'Real-time fleet tracking and route optimization dashboard.', tag: 'React / Mapbox' }
                ].map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                        className={styles.project}
                    >
                        <div className={styles.year}>{project.year}</div>
                        <div className={styles.info}>
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                        </div>
                        <div className={styles.tags}>{project.tag}</div>
                    </motion.div>
                ))}
            </section>
        </main>
    )
}
