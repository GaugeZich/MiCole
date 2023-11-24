import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  opened = false;

  constructor(
    private authService: AuthService,
    private crud: CrudService,
    private router: Router,
    private auth: AngularFireAuth
  ){}
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
