import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-disenos3d',
  templateUrl: './disenos3d.component.html',
  styleUrls: ['./disenos3d.component.scss']
})
export class Disenos3dComponent implements AfterViewInit {
  cartas = [
    { titulo: 'Diseñamos', descripcion: 'Medimos, diseñamos y personalizamos la solucion para que se ajuste perfectamente a tus necesidades', src:'assets/foto1.jpg' },
    { titulo: 'Imprimimos', descripcion: 'Descripción del modelo B', src:'assets/foto2.jpg' },
    { titulo: 'Creamos', descripcion: 'Descripción del modelo C', src:'assets/foto3.jpg' },
  ];

  hoveredIndex: number | null = null;
  isMobile = false;
  cartaActiva = 0;

  @ViewChildren('cartaRef', { read: ElementRef }) cartaElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.actualizarMobile();
    if (this.isMobile) this.setupScrollObserver();
  }

  @HostListener('window:resize')
  onResize() {
    const anterior = this.isMobile;
    this.actualizarMobile();

    // Si cambió a mobile, iniciar observer
    if (this.isMobile && !anterior) {
      this.setupScrollObserver();
    }
  }

  actualizarMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  onHover(index: number | null) {
    if (!this.isMobile) {
      this.hoveredIndex = index;
    }
  }

  setupScrollObserver() {
    const observer = new IntersectionObserver(
      entries => {
        let mejorEntrada: IntersectionObserverEntry | null = null;
        let mejorRatio = 0;
  
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > mejorRatio) {
            mejorEntrada = entry;
            mejorRatio = entry.intersectionRatio;
          }
        });
  
        if (mejorEntrada) {
          const index = this.cartaElements.toArray().findIndex(
            el => el.nativeElement === mejorEntrada!.target
          );
          if (index !== -1) this.cartaActiva = index;
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0.0, 0.1, ..., 1.0]
        rootMargin: '0px 0px -40% 0px' // considerar el centro visual
      }
    );
  
    this.cartaElements.forEach(carta => observer.observe(carta.nativeElement));
  }
  
}
