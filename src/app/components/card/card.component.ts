import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() color:string = '';
  @Input() size:string = '';
  @Input() img_type:string = 'responsive';
  @Input() img_src:string = '';
  @Input() img_width:string = '';
  @Input() img_height:string = '';
  @Input() img_alt:string = '';
  @Input() card_date:string = '';
  @Input() card_title:string = '';
  @Input() card_description:string = '';
  _classes:string = 'card';

  // date:Date = new Date();

  @Input() set classes(value:string){
    this._classes = 'card';

    console.log(this._classes);
    
    if(value.trim() != ''){
      this._classes = `${this._classes} ${value}`;
    }
  }

  constructor() { }

  ngOnInit(): void {
    
    }

}
