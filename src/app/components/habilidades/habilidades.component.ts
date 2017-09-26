import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  private habilidades:any=[];
 
  constructor() { 


  this.habilidades.push("Java");
  this.habilidades.push("Swift");
  this.habilidades.push("C++");
  this.habilidades.push("Ansi C");

  }

  ngOnInit() {
  }

}
