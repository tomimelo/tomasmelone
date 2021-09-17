import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  public projects: IProject[] = [
    {
      title: "Sellery",
      description: "Sellery is a platform that allows you to integrate your company's systems with Mercado Libre and automate your business.",
      img: "../../../assets/imgs/sellery-image.webp",
      disabled: true
    },
    {
      title: "NANO",
      description: "NANO is a software aimed to IT companies to manage and automate their business. It allows you to monitorize the events that occur within your company and avoid system failures. Includes databases and tasks manager.",
      img: "../../../assets/imgs/placeholder-image.png",
      disabled: true
    },
    {
      title: "Tarsius",
      description: "Tarsius is a Twitch watcher bot that integrates with a Telegram bot to manage it easily via commands. It can handle login confirmation codes and captcha verification. Built using Puppeteer.",
      img: "../../../assets/imgs/placeholder-image.png",
      disabled: true
    },
    {
      title: "Basic Node TS Express Server",
      description: "This is a basic structure in typescript for a node express server project. It has error and exception handlers, loggers and database connector incorporated.",
      img: "../../../assets/imgs/nodets.webp",
      src: "https://github.com/tomimelo/basic-node-express-ts"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
