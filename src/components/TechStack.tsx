'use client'

import styles from './TechStack.module.css'
import { motion } from 'framer-motion'

const tech = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Go', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'AWS/GCP', category: 'Cloud' }
]

export default function TechStack() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Armed with Elite Tech</h2>
                    <p className={styles.subtitle}>
                        We use the same tools that power the internet's giants to build your solution.
                    </p>
                </div>

                <div className={styles.grid}>
                    {tech.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={styles.item}
                        >
                            <span className={styles.category}>{item.category}</span>
                            <span className={styles.name}>{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
