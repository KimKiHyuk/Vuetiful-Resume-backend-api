export interface skillData extends baseData {
    avatarSize: number;
    skills: SkillsItem[];
}

export interface SkillsItem {
    name: string;
    proficiency: number;
    imageSource: string;
    hashtag: HashtagItem[];
}

export interface HashtagItem {
    name: string;
}