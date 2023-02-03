import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public personajes:string[]=['Porky','Pato Lucas','Bug Bonny','Correcaminos'];
  public pBorrado  :string="";

  borraPersonaje():void{
    console.log('Borrando..');
    this.pBorrado=this.personajes.pop() || '';
  }
}
