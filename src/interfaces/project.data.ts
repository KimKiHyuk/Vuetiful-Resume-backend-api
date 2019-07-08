export interface projectData extends baseData {
    category: string,
    projects: projectItems[]
}

interface projectItems {
    title: string,
    description: string,
    tech: techItems[],
    github: string
}

interface techItems {
    skill: string,
    usage: string
}
