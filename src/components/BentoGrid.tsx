'use client'

import styles from './BentoGrid.module.css'
import { motion } from 'framer-motion'

export default function BentoGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Capabilities</h2>
                    <p>Comprehensive solutions for modern digital challenges.</p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.large}`}>
                        <h3>Venture Studio</h3>
                        <p>We incubate and build our own proprietary SaaS products, testing boundaries and creating new markets.</p>
                        <div className={styles.tags}>
                            <span>Product Design</span>
                            <span>Go-to-Market</span>
                            <span>MVP Dev</span>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.medium}`}>
                        <h3>Client Agency</h3>
                        <p>Partnering with global brands to deliver enterprise-grade software.</p>
                    </div>

                    <div className={`${styles.card} ${styles.small}`}>
                        <h3>AI Integration</h3>
                        <p>LLM & Agentic workflows.</p>
                    </div>

                    <div className={`${styles.card} ${styles.tall}`}>
                        <h3>Cloud Native</h3>
                        <p>AWS / Azure / GCP architects.</p>
                    </div>

                    <div className={`${styles.card} ${styles.wide}`}>
                        <h3>The OmniScale Stack</h3>
                        <p>Next.js, TypeScript, Supabase, Tailwind, Framer Motion.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
