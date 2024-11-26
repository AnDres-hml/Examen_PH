import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await this.platform.ready();
      await this.storage.create();
    } catch (error) {
      console.error('Error al inicializar el almacenamiento:', error);
    }
  }
}



