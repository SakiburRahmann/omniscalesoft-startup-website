'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
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
                    <Link href="/contact" className={styles.button}>Let&apos;s Talk</Link>
                </div>

                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileMenu}
                    >
                        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
                        <Link href="/method" onClick={() => setIsOpen(false)}>Method</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Let&apos;s Talk</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
