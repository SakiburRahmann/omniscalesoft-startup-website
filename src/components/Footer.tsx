import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            OmniScale<span>Soft</span>
                        </Link>
                        <p>Architecting the future of software, one scale at a time.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.group}>
                            <h4>Expertise</h4>
                            <Link href="/services/web">Web Development</Link>
                            <Link href="/services/mobile">Mobile Apps</Link>
                            <Link href="/services/cloud">Cloud Solutions</Link>
                        </div>
                        <div className={styles.group}>
                            <h4>Company</h4>
                            <Link href="/about">About Us</Link>
                            <Link href="/method">Methodology</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} OmniScaleSoft. All rights reserved.</p>
                    <div className={styles.socials}>
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">X (Twitter)</Link>
                        <Link href="#">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
