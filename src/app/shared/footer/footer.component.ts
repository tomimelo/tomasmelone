import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from 'src/app/utils/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerActive: boolean = false;
  public actualYear: number = new Date().getFullYear();

  constructor(private iconService: IconService) {
    iconService.registerAll(appIcons);
  }

  ngOnInit(): void {
  }

}
