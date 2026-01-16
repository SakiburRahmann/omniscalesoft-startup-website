'use client'

import styles from './page.module.css'
import { motion } from 'framer-motion'

interface CaseStudy {
    id: string
    client: string
    title: string
    description: string
    metrics: { label: string; value: string }[]
    stack: string[]
    year: string
}

const projects: CaseStudy[] = [
    {
        id: '01',
        client: 'NeoBank Corp',
        title: 'Core Ledger Re-Architecture',
        description: 'Migrating a monolithic rails legacy system to a rust-based microservices architecture to handle high-frequency trading loads.',
        year: '2025',
        metrics: [
            { label: 'Latency (p99)', value: '14ms' },
            { label: 'Throughput', value: '45k TPS' },
            { label: 'Uptime', value: '99.999%' }
        ],
        stack: ['Rust', 'Kafka', 'PostgreSQL', 'Kubernetes']
    },
    {
        id: '02',
        client: 'HealthVision AI',
        title: 'Diagnostic Imaging Pipeline',
        description: 'Building a HIPAA-compliant federated learning pipeline for real-time X-ray analysis across 50+ hospital nodes.',
        year: '2024',
        metrics: [
            { label: 'Inference Time', value: '<200ms' },
            { label: 'Data Processed', value: '2.5 PB' },
            { label: 'Accuracy', value: '99.8%' }
        ],
        stack: ['Python', 'PyTorch', 'TensorRT', 'AWS Bedrock']
    },
    {
        id: '03',
        client: 'LogisticsGlobal',
        title: 'Global Fleet Orchestration',
        description: 'Real-time geospatial state management for a fleet of 15,000 autonomous delivery vehicles.',
        year: '2024',
        metrics: [
            { label: 'State Sync', value: 'Real-time' },
            { label: 'Concurrent Conns', value: '150k+' },
            { label: 'Cost Reduction', value: '35%' }
        ],
        stack: ['Go', 'gRPC', 'Redis', 'Mapbox GL']
    }
]

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
                    Engineering <br /> Outcomes.
                </motion.h1>
                <div className={styles.legend}>
                    <span>[ Selected Case Studies ]</span>
                    <span>[ 2024 — 2025 ]</span>
                </div>
            </section>

            <section className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.clientId}>{project.client} &mdash; {project.year}</span>
                            <span className={styles.projectId}>#{project.id}</span>
                        </div>

                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <p className={styles.projectDesc}>{project.description}</p>

                        <div className={styles.metricsGrid}>
                            {project.metrics.map((metric) => (
                                <div key={metric.label} className={styles.metric}>
                                    <span className={styles.metricValue}>{metric.value}</span>
                                    <span className={styles.metricLabel}>{metric.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.stackList}>
                            {project.stack.map((tech) => (
                                <span key={tech} className={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </section>
        </main>
    )
}
