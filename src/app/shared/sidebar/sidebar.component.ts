import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { IAccordion } from 'src/app/models/accordion.interface';
import { GithubService } from 'src/app/services/github.service';
import { appIcons } from 'src/app/utils/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public panelHidden: boolean = true;
  public accordions: IAccordion[] = [
    {
      title: 'Menu',
      active: true,
      children: [
        {
          icon: "bx bxl-html5",
          text: "index.html",
          url: 'home'
        },
        {
          icon: "bx bxl-css3",
          text: "about_me.css",
          url: 'about-me'
        },
        {
          icon: "bx bxl-javascript",
          text: "my_projects.js",
          url: 'my-projects'
        },
        {
          icon: "bx bxs-file",
          text: "contact.txt",
          url: 'contact'
        }
      ]
    }
  ];

  constructor(private iconService: IconService,
              private githubService: GithubService) {
    iconService.registerAll(appIcons);
  }

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.githubService.getRepos().subscribe(data => {
      const repos = data.map((repo: any) => {
        return {
          icon: "bx bxs-book-bookmark",
          text: repo.name,
          url: repo.html_url,
          external: true
        }
      });
      if (repos.length > 0) {
        this.accordions.push({
          title: "Github Repos",
          active: true,
          children: repos
        });
      }
    });
  }

}
