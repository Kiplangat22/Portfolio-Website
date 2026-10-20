// Types shared by the Express API (server/) and the React client (src/)

export interface Profile {
    name: string;
    shortName: string;
    role: string;
    // Endings typed after "I turn data into ..." in the hero
    heroPhrases: string[];
    tagline: string;
    // Hero paragraph (first person)
    summary: string;
    // "My story" paragraphs; wrap words in **double asterisks** to highlight them
    story: string[];
    // Small facts shown in the "Right now" card next to the story
    now: { label: string; value: string }[];
    // IANA time zone for the live local clock in the hero
    timeZone: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
    photoUrl: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    // Company logo under public/, shown next to the role (falls back to an icon)
    logo?: string;
    points: string[];
}

export interface SkillGroup {
    category: string;
    skills: string[];
}

export interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
}

export interface Education {
    id: number;
    institution: string;
    degree: string;
    location: string;
    period: string;
}

export type CertificationLogo = 'tableau' | 'sql' | 'alx' | 'cisco';

export interface Certification {
    id: number;
    title: string;
    // Issuing organization, shown under the title when set
    issuer?: string;
    // Which logo to show on the card (see src/components/CertificationIcons.tsx)
    logo?: CertificationLogo;
    // Add the credential URL to show a "Verify Credential" button
    link?: string;
}

export interface Portfolio {
    profile: Profile;
    experience: Experience[];
    skills: SkillGroup[];
    projects: Project[];
    education: Education[];
    certifications: Certification[];
}

export interface ContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ApiError {
    error: string;
}
