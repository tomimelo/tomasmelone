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
      title: "Project A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project B",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
