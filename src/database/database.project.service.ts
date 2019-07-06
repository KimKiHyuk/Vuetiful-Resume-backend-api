import { Database } from "./database";
import { Injectable } from '@nestjs/common';
import { projectData } from "src/interfaces/project.data";
import json5 = require("json5");

@Injectable()
export class ProjectDatabaseService implements Database {

  getAllFromDatabase(): projectData[] {
    const json = [
      {
        category: 'Client', // enum
        project: [
          {
            title: 'WINDOWS Protection program',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tech: [
              {
                skill: 'C#',
                usage: 'building for wpf',
              },
              {
                skill: 'python',
                usage: 'erase program',
              },
            ],
            github: 'https://www.naver.com',
          },
          {
            title: 'Opencv MFC',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tech: [
              {
                skill: 'C#',
                usage: 'building for wpf',
              },
              {
                skill: 'python',
                usage: 'erase program',
              },
            ],
            github: 'https://www.naver.com',
          },
        ],
      },
      {
        category: 'Web', // enum
        project: [
          {
            title: 'Resuem by vue',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tech: [
              {
                skill: 'javascript',
                usage: 'frontend',
              },
              {
                skill: 'babel',
                usage: 'transpiler',
              },
            ],
            github: 'https://www.naver.com',
          },
        ],
      },
    ]

    return json5.parse(json5.stringify(json));
  }
}
