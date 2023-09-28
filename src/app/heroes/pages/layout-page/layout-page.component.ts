import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
    `.logout-container {
      display: flex;
      align-items: center; /* Vertically center items */
    }

    .profile-image {
      margin-left: 10px; /* Add spacing between the "Logout" button and the image */
    }`
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-hero'},
    { label: 'Buscador', icon: 'search', url: './search'},
  ]
}
