import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  openAlert: boolean = false;

  mostrar(name: string){
    console.log('Mostrar');
    if (name) {
      console.log(name);
      this.openAlert=true;      
    }

  }

}
