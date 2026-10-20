import { Reveal } from './Reveal';

// Section heading with a small handwritten note above it, e.g. "where I've learned the most"
export const SectionTitle = ({ label, children }: { label: string; children: string }) => (
    <Reveal>
        <p className="section-label">{label}</p>
        <h2 className="section-title">{children}</h2>
    </Reveal>
)
