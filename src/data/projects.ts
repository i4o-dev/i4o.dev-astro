export type ProjectPresentation = {
    title: string
    description: string
}

export type Project = {
    title: string
    techs: string[]
    link: string
    isComingSoon?: boolean
    isBackburner?: boolean
    isFeatured?: boolean
}

export const data: ProjectPresentation = {
    title: 'Projects',
    description:
        "I build small web applications and tools that solve problems that I have. Each project uses at least one technology that I'm trying to learn. All of my projects are *breakable toys*. They're all open-source (or will be open-sourced).",
}

export const projects: Project[] = [
    {
        title: 'Aurelius',
        techs: ['React', 'Remix', 'TypeScript'],
        link: 'https://aurelius.ink/',
    },
    {
        title: 'Catalyst UI',
        techs: ['React', 'TypeScript', 'Radix UI', 'TailwindCSS'],
        link: 'https://catalyst-ui.com',
    },
    {
        title: 'Rescribe',
        techs: ['React', 'Remix', 'MDX', 'TailwindCSS'],
        link: 'https://rescribe.site/',
    },
]

