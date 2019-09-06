export class projectData {
    category: string = '';
    projects: Array<projectItems>;

    constructor() {
        this.projects = new Array<projectItems>();
        this.projects.push(new projectItems());
    }
}

class projectItems {
    title: string = '';
    description: string = '';
    tech: Array<techItems>;
    github: string = '';

    constructor() {
        this.tech = new Array<techItems>();
        this.tech.push(new techItems());
    }
}

class techItems {
    skill:string = '';
    usage:string = '';
}
