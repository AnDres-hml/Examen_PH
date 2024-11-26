import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Avisos } from '../modelo/avisos';

@Injectable({
  providedIn: 'root',
})
export class AvisoService {
  private storageKey = 'avisos';
  private avisos: Avisos[] = [];

  constructor(private storage: Storage) {}

  async init() {
    await this.storage.create();
    const storedAvisos = await this.storage.get(this.storageKey);
    this.avisos = storedAvisos || []; 
  }

  async crearAviso(aviso: Avisos) {
    this.avisos.push(aviso);
    await this.guardarAvisos();
  }

  async getAvisos(): Promise<Avisos[]> {
    return this.avisos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }

  async eliminarAviso(id: number) {
    const index = this.avisos.findIndex((aviso) => aviso.id === id);
    if (index > -1) {
      this.avisos.splice(index, 1);
      await this.guardarAvisos();
    }
  }

  private async guardarAvisos(): Promise<void> {
    await this.storage.set(this.storageKey, this.avisos);
  }
}


