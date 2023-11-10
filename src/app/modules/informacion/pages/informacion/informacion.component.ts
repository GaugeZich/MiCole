import { Component } from '@angular/core';
import { Tarifa } from 'src/app/models/tarifa';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  opened = false;

  tarifaUnica: Tarifa[] = [];

  constructor(
    public servicioCrud: CrudService
  ){}

  // Obtenemos los datos de tarifa
  ngOnInit(): void{
    this.servicioCrud.obtenerTarifa().subscribe(tarifa => {
      this.tarifaUnica = tarifa;
    })
  }
}
