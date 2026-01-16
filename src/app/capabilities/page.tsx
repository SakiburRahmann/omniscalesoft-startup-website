'use client'

import styles from './page.module.css'
import { motion } from 'framer-motion'

export default function Capabilities() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.title}
                >
                    Capabilities.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.intro}
                >
                    We operate at the intersection of Strategy, Design, and Engineering.
                    Our multidisciplinary teams build products that define categories.
                </motion.p>
            </section>

            <section className={styles.grid}>
                {[
                    { id: '01', title: 'Product Strategy', desc: 'We help you define what to build and why. From market research to MVP definition, we validate assumptions before writing a single line of code.' },
                    { id: '02', title: 'System Architecture', desc: 'Designed for scale from Day 1. We architect cloud-native distributed systems that can handle millions of users without breaking a sweat.' },
                    { id: '03', title: 'Full-Stack Engineering', desc: 'TypeScript, Rust, Python, Go. We use the right tool for the job, prioritizing performance, type safety, and maintainability.' },
                    { id: '04', title: 'AI & ML Integration', desc: 'Leveraging Large Language Models and custom training pipelines to give your application a competitive edge in the automation era.' }
                ].map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                        className={styles.item}
                    >
                        <h2>{item.id}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}
            </section>
        </main>
    )
}
