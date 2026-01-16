'use client'

import { motion } from 'framer-motion'
import styles from './SystemVisuals.module.css'

export const NodeGraph = () => (
    <svg viewBox="0 0 200 200" className={styles.visualSvg}>
        <motion.circle cx="100" cy="100" r="4" fill="#000" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        {/* Radiating nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.g key={angle}>
                <motion.line
                    x1="100" y1="100"
                    x2={100 + 60 * Math.cos(angle * Math.PI / 180)}
                    y2={100 + 60 * Math.sin(angle * Math.PI / 180)}
                    stroke="#ccc"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                />
                <motion.circle
                    cx={100 + 60 * Math.cos(angle * Math.PI / 180)}
                    cy={100 + 60 * Math.sin(angle * Math.PI / 180)}
                    r="3"
                    fill="#333"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                />
            </motion.g>
        ))}
    </svg>
)

export const ArchitectureSchematic = () => (
    <svg viewBox="0 0 300 200" className={styles.visualSvg}>
        {/* Client */}
        <motion.rect x="20" y="80" width="40" height="40" rx="4" stroke="#000" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />

        {/* Load Balancer */}
        <motion.rect x="100" y="70" width="20" height="60" rx="2" stroke="#000" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />

        {/* Services */}
        <motion.rect x="180" y="40" width="40" height="30" rx="4" stroke="#000" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <motion.rect x="180" y="90" width="40" height="30" rx="4" stroke="#000" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        <motion.rect x="180" y="140" width="40" height="30" rx="4" stroke="#000" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />

        {/* Connections */}
        <motion.path d="M60 100 H100" stroke="#ccc" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />

        <motion.path d="M120 100 H150 V55 H180" stroke="#ccc" strokeWidth="1" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9 }} />
        <motion.path d="M120 100 H180" stroke="#ccc" strokeWidth="1" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0 }} />
        <motion.path d="M120 100 H150 V155 H180" stroke="#ccc" strokeWidth="1" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
    </svg>
)

export const CICDPipeline = () => (
    <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
        <div className={styles.terminalBody}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>$ git push origin main</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>&gt; Running tests...</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className={styles.success}>✔ Unit Tests (452/452) passed</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className={styles.success}>✔ Integration Tests passed</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>&gt; Building Docker image...</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className={styles.cursor}>_</motion.p>
        </div>
    </div>
)

export const LoadBalancer = () => (
    <svg viewBox="0 0 300 150" className={styles.visualSvg}>
        {/* Requests */}
        {[0, 1, 2].map(i => (
            <motion.circle key={i} cx="20" cy={50 + i * 25} r="2" fill="#000"
                animate={{ cx: [20, 140], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
            />
        ))}

        {/* Balancer */}
        <rect x="140" y="40" width="20" height="70" stroke="#000" fill="#fff" />

        {/* Nodes */}
        <rect x="250" y="20" width="30" height="30" rx="4" stroke="#ccc" fill="none" />
        <rect x="250" y="60" width="30" height="30" rx="4" stroke="#ccc" fill="none" />
        <rect x="250" y="100" width="30" height="30" rx="4" stroke="#ccc" fill="none" />

        {/* Distributed */}
        <motion.circle cx="160" cy="75" r="2" fill="#000"
            animate={{ cx: [160, 250], cy: [75, 35], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <motion.circle cx="160" cy="75" r="2" fill="#000"
            animate={{ cx: [160, 250], cy: [75, 75], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
        />
        <motion.circle cx="160" cy="75" r="2" fill="#000"
            animate={{ cx: [160, 250], cy: [75, 115], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
        />
    </svg>
)
