'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={styles.nav}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    OmniScale<span>Soft</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/services">Services</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/method">Method</Link>
                    <Link href="/contact" className={styles.button}>Let's Talk</Link>
                </div>
            </div>
        </motion.nav>
    )
}
