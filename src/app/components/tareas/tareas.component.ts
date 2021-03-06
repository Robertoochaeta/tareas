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

  // Objeto Tarea
  const tarea:tarea ={
    nombre:this.nombreTarea,
    estado:false
  }

  // Agregar El objeto tarea al array
this.listTareas.push(tarea);
  // Reset Form
  this.nombreTarea = '';
}
eliminarTarea(index:number):void{
this.listTareas.splice(index,1);
}
actualizarTarea(tarea:tarea,index:number){
this.listTareas[index].estado=!tarea.estado
}
}
