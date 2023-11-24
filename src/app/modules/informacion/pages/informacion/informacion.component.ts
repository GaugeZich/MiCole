import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Tarifa } from 'src/app/models/tarifa';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  opened = false;

  tarifaUnica: Tarifa[] = [];

  constructor(
    public servicioCrud: CrudService,
    private authService: AuthService,
    private router: Router,
    private auth: AngularFireAuth
  ){}

  // Obtenemos los datos de tarifa
  ngOnInit(): void{
    this.servicioCrud.obtenerTarifa().subscribe(tarifa => {
      this.tarifaUnica = tarifa;
    })
  }

  entrarCuenta(){
    this.auth.authState.subscribe(usuarios => {
      if(usuarios) {
        this.router.navigate(['/cuenta'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }
}
