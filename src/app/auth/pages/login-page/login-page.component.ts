import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
    `.flex.flex-column {
      max-width: 400px; /* Establece el ancho máximo deseado */
      margin: 0 auto; /* Centra el contenedor en la pantalla */
    }
    .mat-form-field {
    width: 100%; /* O el porcentaje deseado */
    }

    button.mat-button {
      width: 100%; /* O el porcentaje deseado */
    }

    `
  ]
})
export class LoginPageComponent {

}
