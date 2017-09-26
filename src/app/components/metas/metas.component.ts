import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  private metas:any =[];

  constructor() {
    this.metas.push("Meta1");
    this.metas.push("la primera meta fue la de ser becado en jala durante un año");
    this.metas.push("Meta2");
    this.metas.push("la de pertenecer a una asociacion de software  ");
   
   }

  ngOnInit() {
  }

}
