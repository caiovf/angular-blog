import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:any[] = ['1','2','3','4','5','6'];
  
  moreposts():void {
    this.posts.push('7','8','9','10','11','12');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
