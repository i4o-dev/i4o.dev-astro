export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
};

const projects: Project[] = [
    {
        title: "Aurelius",
        techs: ["React", "Remix", "TypeScript"],
        link: "https://aurelius.ink/",
    },
    {
        title: "Catalyst UI",
        techs: ["React", "TypeScript", "Radix UI", "TailwindCSS"],
        link: "https://catalyst-ui.com",
    },
    {
        title: "Rescribe",
        techs: ["React", "Remix", "MDX", "TailwindCSS"],
        link: "https://rescribe.site/",
    },
];

export default projects;
