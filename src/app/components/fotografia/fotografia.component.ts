import { Component } from '@angular/core';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.scss']
})
export class FotografiaComponent {
  public Math = Math;

  fotos = [
    { src: 'assets/foto1.jpg', descripcion: 'BMW - Drift Day, Arrecifes' },
    { src: 'assets/foto2.jpg', descripcion: 'Stan de Ferraris varias - Autoclasica 2024' },
    { src: 'assets/foto3.jpg', descripcion: 'Refugio Agostino Rocca - Bariloche, Argentina' },
    { src: 'assets/foto5.jpg', descripcion: 'Yamaha R6 en movimiento - Trabajo Particular' },
    { src: 'assets/foto6.jpg', descripcion: 'Motor Torino - Autoclasica 2024' },
  ];

  fotoSeleccionada = 2;
  ultimaDireccion: 'izquierda' | 'derecha' = 'derecha';
  transicionando = false;

  siguiente() {
    if (this.fotoSeleccionada < this.fotos.length - 1 && !this.transicionando) {
      this.transicionando = true;
      this.ultimaDireccion = 'derecha';

      setTimeout(() => {
        this.fotoSeleccionada++;
        this.transicionando = false;
      }, 100); // Tiempo similar al de la animación CSS
    }
  }

  anterior() {
    if (this.fotoSeleccionada > 0 && !this.transicionando) {
      this.transicionando = true;
      this.ultimaDireccion = 'izquierda';

      setTimeout(() => {
        this.fotoSeleccionada--;
        this.transicionando = false;
      }, 500);
    }
  }

  isActiva(index: number): boolean {
    return index === this.fotoSeleccionada;
  }

}