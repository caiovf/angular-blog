import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-interna',
  templateUrl: './banner-interna.component.html',
  styleUrls: ['./banner-interna.component.css']
})
export class BannerInternaComponent implements OnInit {
  @Input() img_src: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
