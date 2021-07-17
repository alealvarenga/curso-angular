import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Capitan America'];
  heroeBorrado: string = '';
  mostrarBorrado: boolean = false;

  borrarHeroe() :void {

    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
   
  }


}
