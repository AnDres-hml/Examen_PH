import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Avisos } from 'src/app/modelo/avisos';
import { AvisoService } from 'src/app/serv/aviso.service';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class FormularioPage {
  nuevoAviso: Avisos = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    imagen: '',
  };

  constructor(private avisoService: AvisoService) {}

  async guardarAviso() {
    this.nuevoAviso.id = new Date().getTime();
    await this.avisoService.crearAviso(this.nuevoAviso);
    alert('Aviso creado exitosamente');
  }
}



