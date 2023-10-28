import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  coleccionInformacion: Informacion[] = [];

  constructor(
    public servicioCrud : CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerInformacion().subscribe(informacion => {
      this.coleccionInformacion = informacion
    })
  }
}
