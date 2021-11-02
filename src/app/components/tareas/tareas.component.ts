import { Component, OnInit } from '@angular/core';
import { tarea } from '../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  PlaceHolder='Ingrese Tarea';
  listTareas :tarea[] =[];
  nombreTarea = '';
  constructor() { }

  ngOnInit(): void {
  }
agregarTarea(){
  console.log(this.nombreTarea);
  // Objeto Tarea

  // Agregar El objeto tarea al array

  // Reset Form
}
}
