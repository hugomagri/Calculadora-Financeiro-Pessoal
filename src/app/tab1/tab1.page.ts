import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  isCardVisible: boolean = false; // Inicialmente o card está oculto

  toggleCard() {
    this.isCardVisible = !this.isCardVisible; // Alterna entre mostrar e ocultar o card
  }

  constructor() {}

}
