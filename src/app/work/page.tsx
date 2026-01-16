import styles from './page.module.css'

export default function Work() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Selected Work.</h1>
            </section>

            <section className={styles.list}>
                <div className={styles.project}>
                    <div className={styles.year}>2025</div>
                    <div className={styles.info}>
                        <h2>FinTech Core</h2>
                        <p>Rebuilding the payment infrastructure for a Series B Neo-bank.</p>
                    </div>
                    <div className={styles.tags}>System Architecture</div>
                </div>

                <div className={styles.project}>
                    <div className={styles.year}>2024</div>
                    <div className={styles.info}>
                        <h2>HealthGuard AI</h2>
                        <p>Diagnostic imaging analysis pipeline using computer vision.</p>
                    </div>
                    <div className={styles.tags}>Machine Learning</div>
                </div>

                <div className={styles.project}>
                    <div className={styles.year}>2024</div>
                    <div className={styles.info}>
                        <h2>LogisticsPro</h2>
                        <p>Real-time fleet tracking and route optimization dashboard.</p>
                    </div>
                    <div className={styles.tags}>React / Mapbox</div>
                </div>
            </section>
        </main>
    )
}
