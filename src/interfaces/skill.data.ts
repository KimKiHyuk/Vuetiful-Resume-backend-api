export class skillData {
    avatarSize: number = 0;
    skills: Array<SkillsItem>;

    constructor() {
        this.skills = new Array<SkillsItem>();
        this.skills.push(new SkillsItem());
    }
}

class SkillsItem {
    name: string = '';
    proficiency: number = 0;
    imageSource: string = '';
    hashtag: Array<HashtagItem>;

    constructor() {
        this.hashtag = new Array<HashtagItem>();
        this.hashtag.push(new HashtagItem());
    }
}

class HashtagItem {
    name: string = '';
}