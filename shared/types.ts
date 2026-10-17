// Types shared by the Express API (server/) and the React client (src/)

export interface Profile {
    name: string;
    shortName: string;
    roles: string[];
    tagline: string;
    summary: string;
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

export interface Certification {
    id: number;
    title: string;
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
