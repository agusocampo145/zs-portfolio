import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  cargandoImagen: boolean = true;

  imagenes: string[] = ['assets/sobreMi/yo.JPG', 'assets/sobreMi/sobreMi.jpg'];
  imagenActual: string = this.imagenes[0];
  indiceActual: number = 0;
  intervalo!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
      this.imagenActual = this.imagenes[this.indiceActual];
    }, 4000)
    this.cargandoImagen= false; // cambia cada 5 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

}
