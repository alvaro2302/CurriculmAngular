import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  private logros:any =[];
  constructor() {

    this.logros.push("los logros fueron ");
    this.logros.push("programacion 2");
    this.logros.push("estructura de datos ");
   }

  ngOnInit() {
  }

}
