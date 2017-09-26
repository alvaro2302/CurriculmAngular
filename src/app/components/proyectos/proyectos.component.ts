import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  private proyectos:any =[];
  constructor() {

    this.proyectos.push("sistema de generacion de boletas (Software)");
    this.proyectos.push("java 8");
    this.proyectos.push("programcion funcional con java ");
   }

  ngOnInit() {
  }

}
