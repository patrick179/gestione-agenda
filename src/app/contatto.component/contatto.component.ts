import { Component } from '@angular/core';
import { Contatto } from './contatto.model.ts';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Patrick', 'Valentini', 'patrick.valentini@marconirovereto.it', '+39347926467', 3);

}