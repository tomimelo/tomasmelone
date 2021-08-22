import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IconModule } from '@visurel/iconify-angular';
import { CreditsComponent } from './credits/credits.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    CreditsComponent
  ]
})
export class SharedModule { }
