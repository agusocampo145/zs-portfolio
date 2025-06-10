import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviando = false;
  mensajeExito = false;
  mensajeError = false;

  enviarFormulario() {
    this.enviando = true;
    this.mensajeExito = false;
    this.mensajeError = false;

    emailjs.send('xxx', 'xxx', this.formData, 'xxx')
      .then(() => {
        this.mensajeExito = true;
        this.formData = { nombre: '', email: '', mensaje: '' };
      })
      .catch((error) => {
        console.error('Error al enviar', error);
        this.mensajeError = true;
      })
      .finally(() => {
        this.enviando = false;
      });
  }
}

