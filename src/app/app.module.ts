import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module'
import { SharedModule } from './shared/shared.module'
import { ComponentsModule } from './components/components.module'

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    ComponentsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
