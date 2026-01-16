import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandSection}>
                    <Link href="/" className={styles.logo}>
                        OmniScale<span>Soft</span>
                    </Link>
                    <p className={styles.tagline}>
                        Engineering the next generation of <br /> digital infrastructure.
                    </p>
                    <div className={styles.status}>
                        <span className={styles.statusDot}></span>
                        All Systems Operational
                    </div>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h4>Capabilities</h4>
                        <Link href="/capabilities#strategy">Product Strategy</Link>
                        <Link href="/capabilities#engineering">Full-Stack Eng</Link>
                        <Link href="/capabilities#ai">AI Integration</Link>
                        <Link href="/capabilities#cloud">Cloud Native</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Work</h4>
                        <Link href="/work#fintech">Fintech Core</Link>
                        <Link href="/work#health">HealthGuard AI</Link>
                        <Link href="/work#logistics">LogisticsPro</Link>
                        <Link href="/work">View All</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <Link href="/method">Methodology</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/legal">Legal</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                        <a href="https://github.com" target="_blank">GitHub</a>
                        <a href="https://twitter.com" target="_blank">X (Twitter)</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} OmniScaleSoft Inc. San Francisco &middot; Dhaka.</p>
                <div className={styles.legalLinks}>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/terms">Terms</Link>
                </div>
            </div>
        </footer>
    )
}
