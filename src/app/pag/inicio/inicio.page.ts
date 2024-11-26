import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Avisos } from 'src/app/modelo/avisos';
import { AvisoService } from 'src/app/serv/aviso.service';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class InicioPage implements OnInit {
  avisos: Avisos[] = [];

  constructor(private avisoService: AvisoService) {}

  async ngOnInit() {
    try {
      await this.avisoService.init();
      this.avisos = await this.avisoService.getAvisos();
    } catch (error) {
      console.error('Error al cargar los avisos:', error);
    }
  }

  async eliminarAviso(id: number) {
    await this.avisoService.eliminarAviso(id);
    this.avisos = await this.avisoService.getAvisos();
  }
}



