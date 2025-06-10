import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Sobre Nosotros', route: '/aboutUs' },
    { label: 'Fotografía', route: '/fotografia' },
    { label: 'Impresiones 3D', route: '/disenos3d' },
    { label: 'Contacto', route: '/contacto' }
  ];

  selectedItem = '/home';

  constructor(private router: Router) {}

  selectItem(item: { label: string; route: string }) {
    this.selectedItem = item.route;
    this.router.navigate([item.route]);
  }
}
