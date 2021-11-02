import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  PlaceHolder='Ingrese Tarea'
  constructor() { }

  ngOnInit(): void {
  }

}
