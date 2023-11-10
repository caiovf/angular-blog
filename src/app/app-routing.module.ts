import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InternaBlogComponent } from './pages/interna-blog/interna-blog.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:slug',
    component: InternaBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
