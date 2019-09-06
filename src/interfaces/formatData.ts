import { careerData } from "./career.data";
import { educationData } from "./education.data";
import { projectData } from "./project.data";
import { aboutmeData } from "./aboutme.data";
import { skillData } from "./skill.data";

export class formatData {
    aboutmeData : aboutmeData = new aboutmeData();
    careerData : careerData = new careerData();
    educationData : educationData = new educationData();
    projectData: projectData = new projectData();
    skillData: skillData = new skillData()
}