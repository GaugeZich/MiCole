import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  //se crea una instancia y se asefura que la detección de cambios se ha realizado antes de ejecutar las pruebas
  beforeEach(() => {
    /*
    testBed=>crea instancias de componentes y servicios
    configureTestingModule=>configurar un modulo
    */
    TestBed.configureTestingModule({
      declarations: [InicioComponent]
    });
    //crea una instancia del componente
    fixture = TestBed.createComponent(InicioComponent);
    //proporciona acceso directo a la instancia del componente creado con testbed
    component = fixture.componentInstance;
    // se utiliza para forzar la detección de cambios en el componente.
    fixture.detectChanges();
  });
  
  //función Jasmine 
  //verifica si la instancia del componente se crea correctamente 
  it('should create', () => {
    //tobeTruthy=>la prueba está verificando que la instancia del componente no sea nula ni indefinida
    expect(component).toBeTruthy();
  });
});
