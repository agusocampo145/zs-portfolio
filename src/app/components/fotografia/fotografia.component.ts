import { Component } from '@angular/core';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.scss']
})
export class FotografiaComponent {
  public Math = Math;

  fotos = [
    { src: 'assets/fotografia/audi.JPG', descripcion: 'Audi RS6 - Boxes del Autodromo de Buenos Aires Oscar y Juan Galvéz', loading: 'lazy'},
    { src: 'assets/fotografia/foto2.jpg', descripcion: 'Stand de Ferraris varias - Autoclasica 2024', loading: 'lazy' },
    { src: 'assets/fotografia/greenbee.webp', descripcion: 'Toyota Corolla Drift - Baradero, Argentina', loading: 'eager' },
    { src: 'assets/fotografia/foto6.jpg', descripcion: 'Motor Torino - Autoclasica 2024', loading: 'lazy' },
    { src: 'assets/fotografia/drift2.JPG', descripcion: 'Tandem de Drift - Baradero, Argentina', loading: 'lazy' },
    { src: 'assets/fotografia/Quattro.jpg', descripcion: 'Replica Audi Quattro S1 - Autoclasica 2023', loading: 'lazy' },
    { src: 'assets/fotografia/torino.JPG', descripcion: 'Replica Torino Nurbugring - Autodromo de Buenos Aires Oscar y Juan Galvéz (mixtos)', loading: 'lazy' },

  ];

  imagenesCargadas: boolean[] = [];
  fotoSeleccionada = 2;
  ultimaDireccion: 'izquierda' | 'derecha' = 'derecha';
  transicionando = false;

  ngOnInit() {
    this.imagenesCargadas = this.fotos.map(() => false);
  }

  marcarCargada(index: number) {
    this.imagenesCargadas[index] = true;
  }

  siguiente() {
    if (this.fotoSeleccionada < this.fotos.length - 1 && !this.transicionando) {
      this.transicionando = true;
      this.ultimaDireccion = 'derecha';

      setTimeout(() => {
        this.fotoSeleccionada++;
        this.transicionando = false;
      }, 80); // Tiempo similar al de la animación CSS
    }
  }

  anterior() {
    if (this.fotoSeleccionada > 0 && !this.transicionando) {
      this.transicionando = true;
      this.ultimaDireccion = 'izquierda';

      setTimeout(() => {
        this.fotoSeleccionada--;
        this.transicionando = false;
      }, 80);
    }
  }

  isActiva(index: number): boolean {
    return index === this.fotoSeleccionada;
  }

}