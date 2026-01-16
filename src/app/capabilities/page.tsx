import styles from './page.module.css'

export default function Capabilities() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Capabilities.</h1>
                <p className={styles.intro}>
                    We operate at the intersection of Strategy, Design, and Engineering.
                    Our multidisciplinary teams build products that define categories.
                </p>
            </section>

            <section className={styles.grid}>
                <div className={styles.item}>
                    <h2>01</h2>
                    <h3>Product Strategy</h3>
                    <p>We help you define what to build and why. From market research to MVP definition, we validate assumptions before writing a single line of code.</p>
                </div>
                <div className={styles.item}>
                    <h2>02</h2>
                    <h3>System Architecture</h3>
                    <p>Designed for scale from Day 1. We architect cloud-native distributed systems that can handle millions of users without breaking a sweat.</p>
                </div>
                <div className={styles.item}>
                    <h2>03</h2>
                    <h3>Full-Stack Engineering</h3>
                    <p>TypeScript, Rust, Python, Go. We use the right tool for the job, prioritizing performance, type safety, and maintainability.</p>
                </div>
                <div className={styles.item}>
                    <h2>04</h2>
                    <h3>AI & ML Integration</h3>
                    <p>Leveraging Large Language Models and custom training pipelines to give your application a competitive edge in the automation era.</p>
                </div>
            </section>
        </main>
    )
}
