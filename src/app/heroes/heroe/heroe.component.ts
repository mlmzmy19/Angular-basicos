import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Iro-Man';
    edad  :number = 45;

    obtenerNombre():string {
        return ` ${ this.nombre } - ${ this.edad } `;
    }

    get nombreCapitalizado(): string  {
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void {
        if (this.nombre=="Porky")
            this.nombre="Llanero Solitario";
        else
            this.nombre="Porky";
    }
    cambiarEdad():void {
        if (this.nombre=="Porky")
            this.edad=90;
        else
            this.edad=110;
    }
}