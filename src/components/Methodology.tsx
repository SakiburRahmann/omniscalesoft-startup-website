'use client'

import styles from './Methodology.module.css'
import { motion } from 'framer-motion'

const steps = [
    {
        title: 'Analyze',
        description: 'We dive deep into your business goals, user needs, and market gaps to define a clear product vision.',
        icon: '🔍'
    },
    {
        title: 'Architect',
        description: 'Using "Big Tech" principles, we design systems that are secure, stable, and ready to scale infinitely.',
        icon: '🏗️'
    },
    {
        title: 'Build',
        description: 'Our elite engineers transform blueprints into high-performance web, mobile, and cloud environments.',
        icon: '💻'
    },
    {
        title: 'Scale',
        description: 'We don’t just launch; we optimize. Continous improvements to ensure your software grows with you.',
        icon: '📈'
    }
]

export default function Methodology() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The OmniScale Method</h2>
                    <p className={styles.subtitle}>
                        A rigorous engineering process designed to deliver excellence at every stage.
                    </p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={styles.step}
                        >
                            <div className={styles.stepNumber}>0{index + 1}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
