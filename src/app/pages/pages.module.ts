import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component'
import { BlogComponent } from './blog/blog.component'
import { InternaBlogComponent } from './interna-blog/interna-blog.component'
import { BannerInternaComponent } from './interna-blog/banner-interna/banner-interna.component'
import { ComponentsModule } from "../components/components.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        BlogComponent,
        InternaBlogComponent,
        BannerInternaComponent
    ],
    exports: [
        HomeComponent,
        BlogComponent,
        InternaBlogComponent,
        BannerInternaComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        SharedModule
    ]
})
export class PagesModule { }
