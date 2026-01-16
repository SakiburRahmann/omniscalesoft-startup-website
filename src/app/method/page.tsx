'use client'

import styles from './page.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { NodeGraph, ArchitectureSchematic, CICDPipeline, LoadBalancer } from '@/components/SystemVisuals'

export default function Method() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const steps = [
        { id: '01', title: 'Deep Discovery', desc: 'We don’t just take orders. We challenge assumptions. We spend the first 2 weeks embedding with your team to uncover the "why" behind the "what".', tags: ['User Research', 'Market Analysis', 'Technical Audit'] },
        { id: '02', title: 'System Architecture', desc: 'Before a single line of code is written, we design the nervous system of your application. Scale, security, and redundancy are baked in from the whiteboard phase.', tags: ['AWS/GCP', 'Microservices', 'Database Schema'] },
        { id: '03', title: 'Agile Development', desc: 'We work in rigorous 2-week sprints. You see working software every 14 days. No black boxes. No surprises. Just consistent, shippable value.', tags: ['CI/CD', 'TDD', 'Code Reviews'] },
        { id: '04', title: 'Launch & Scale', desc: 'Go-live is just the beginning. We set up comprehensive monitoring, error tracking, and analytics to ensure your system performs under real-world load.', tags: ['Datadog', 'Sentry', 'Auto-scaling'] }
    ]

    return (
        <main className={styles.main} ref={containerRef}>
            <section className={styles.intro}>
                <h1>Our Methodology.</h1>
                <p>A transparent, engineering-led process designed to mitigate risk and maximize ROI.</p>
            </section>

            <div className={styles.timelineContainer}>
                <motion.div style={{ scaleY: scrollYProgress }} className={styles.progressBar} />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        transition={{ duration: 0.6 }}
                        className={styles.step}
                    >
                        <div className={styles.marker}></div>

                        <div className={styles.contentWrapper}>
                            <div className={styles.stepContent}>
                                <span className={styles.number}>{step.id}</span>
                                <h2>{step.title}</h2>
                                <p>{step.desc}</p>
                                <div className={styles.tags}>
                                    {step.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                            </div>

                            <div className={styles.visualContainer}>
                                {index === 0 && <NodeGraph />}
                                {index === 1 && <ArchitectureSchematic />}
                                {index === 2 && <CICDPipeline />}
                                {index === 3 && <LoadBalancer />}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}
