import { Component } from '@angular/core';


@Component({ 
    selector : 'app-contador',
    template : `
        <h1>{{title}}</h1>
        <h3><strong>la base es: {{base}}</strong></h3>
        <html>
            <h1>
            <button (click)="acumular(base)">sumar {{base}}</button>{{contador}}
            <button (click)="acumular(-base)">restar {{base}}</button>
            </h1>
        </html>      
        `
    })
export class ContadorComponent{
    title = 'Base para acumular';
    contador:number=10;
    base:number=5;
    acumular(valor:number){
      this.contador+=valor;
    }    
}