export default function Method() {
    return (
        <main style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: 'var(--max-width)', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                The OmniScale <span style={{ color: 'var(--accent)' }}>Method</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                Our proven methodology ensures consistency, quality, and speed. We don't just write code; we engineer success.
            </p>

            <div style={{ marginTop: '4rem' }}>
                <MethodStep number="01" title="Analyze" description="Deep dive into requirements and business goals." />
                <MethodStep number="02" title="Architect" description="Designing scalable systems and data structures." />
                <MethodStep number="03" title="Build" description="Agile development with rigorous testing." />
                <MethodStep number="04" title="Scale" description="Deployment, monitoring, and growth optimization." />
            </div>
        </main>
    )
}

function MethodStep({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '4rem', fontWeight: '700', color: 'var(--accent)', opacity: 0.2, lineHeight: 1 }}>{number}</span>
            <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{description}</p>
            </div>
        </div>
    )
}
