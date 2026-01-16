export default function Products() {
    return (
        <main style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: 'var(--max-width)', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Our <span style={{ color: 'var(--accent)' }}>Products</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                In our Studio, we build cutting-edge digital products that solve real-world problems. Explore our portfolio of proprietary software.
            </p>

            <div style={{ marginTop: '4rem', padding: '4rem', border: '1px dashed var(--accent)', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(8, 145, 178, 0.05)' }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Upcoming Releases</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We have several exciting products in the pipeline. Stay tuned for announcements.</p>
            </div>
        </main>
    )
}
