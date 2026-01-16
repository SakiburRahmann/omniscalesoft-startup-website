export default function Services() {
    return (
        <main style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: 'var(--max-width)', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Our <span style={{ color: 'var(--accent)' }}>Services</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                We provide end-to-end software development services tailored to your specific needs. From initial consultation to final deployment, we ensure scalable and robust solutions.
            </p>
            <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <ServiceCard title="Custom Software Development" description="Tailored solutions for your unique business challenges." />
                <ServiceCard title="Mobile App Development" description="Native and cross-platform apps that engaging users." />
                <ServiceCard title="Web Application Development" description="Scalable, high-performance web applications." />
                <ServiceCard title="Cloud Infrastructure" description="Secure and scalable cloud architecture design." />
            </div>
        </main>
    )
}

function ServiceCard({ title, description }: { title: string, description: string }) {
    return (
        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'rgba(255,255,255,0.5)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
        </div>
    )
}
