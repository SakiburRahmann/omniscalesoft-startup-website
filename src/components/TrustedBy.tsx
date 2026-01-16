'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './TrustedBy.module.css'

const brands = [
    "ACME Corp", "Stark Ind", "Wayne Ent", "Cyberdyne", "Umbrella", "Massive Dynamic", "Hooli", "Initech"
]

export default function TrustedBy() {
    return (
        <section className={styles.section}>
            <p className={styles.label}>Trusted by forward-thinking companies</p>
            <div className={styles.scroller}>
                <motion.div
                    className={styles.track}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={i} className={styles.brand}>{brand}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
