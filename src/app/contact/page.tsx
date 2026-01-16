export default function Contact() {
    return (
        <main style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: 'var(--max-width)', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Let's <span style={{ color: 'var(--accent)' }}>Talk</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                Ready to scale your vision? Get in touch with our team of experts.
            </p>

            <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact Info</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>hello@omniscalesoft.com</p>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                    <p style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</p>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input type="text" placeholder="Your Name" style={inputStyle} />
                    <input type="email" placeholder="Your Email" style={inputStyle} />
                    <textarea placeholder="Tell us about your project" rows={5} style={inputStyle}></textarea>
                    <button type="submit" style={{
                        padding: '1rem 2rem',
                        background: 'var(--text-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>Send Message</button>
                </form>
            </div>
        </main>
    )
}

const inputStyle = {
    padding: '1rem',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    background: 'rgba(255,255,255,0.5)'
}
