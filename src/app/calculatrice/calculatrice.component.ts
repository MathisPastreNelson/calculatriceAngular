import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./_calculatrice.component.scss'],
})
export class CalculatriceComponent {
  // Typage des values
  value1!: number;
  value2!: number;
  result!: number;

  // Différente opération de la calculette
  add(): void {
    this.result = this.value1 + this.value2;
  }

  substract(): void {
    this.result = this.value1 - this.value2;
  }

  multiply(): void {
    this.result = this.value1 * this.value2;
  }

  divide(): void {
    this.result = this.value1 / this.value2;
  }
}
