import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from 'src/app/utils/icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private iconService: IconService) {
    iconService.registerAll(appIcons);
  }

  ngOnInit(): void {
  }

}
