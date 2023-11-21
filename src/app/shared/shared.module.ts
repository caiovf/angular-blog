import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    HeaderComponent,
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PageTitleComponent    
  ]
})
export class SharedModule { }
