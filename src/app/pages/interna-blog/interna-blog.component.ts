import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interna-blog',
  templateUrl: './interna-blog.component.html',
  styleUrls: ['./interna-blog.component.css']
})
export class InternaBlogComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
  
    // RETORNA OS PARAMETROS
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    
    // RETORNA OS PARAMETROS DE "GET"
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

    // RETORNA OS PARAMETROS DOS FILHOS
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
  }

}
