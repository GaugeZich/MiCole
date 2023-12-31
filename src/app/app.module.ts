import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfiguracionRoutingModule } from './modules/configuracion/configuracion-routing.module';

// AuthModule
import { AuthModule } from './modules/auth/auth.module';

// Modules
import { SharedModule } from './shared/shared.module';
import { RecorridosModule } from './modules/recorridos/recorridos.module';
import { SubeModule } from './modules/sube/sube.module';
import { InformacionModule } from './modules/informacion/informacion.module';
import { FavoritosComponent } from './modules/favoritos/pages/favoritos/favoritos.component';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BuscadorModule } from './modules/buscador/buscador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //configuración de modulos 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    RecorridosModule,
    SubeModule,
    InformacionModule,
    ConfiguracionRoutingModule,
    BuscadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
