import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  isSidebarClosed: boolean = true;
  isSidebarOpen: boolean = true; // Inicialmente aberto

  constructor(private sidebarService: SidebarService) {
    // Inscreva-se no serviço para receber atualizações sobre o estado da barra lateral
    this.sidebarService.sidebarState.subscribe((isOpen: boolean) => {
      this.isSidebarOpen = !isOpen;
      this.isSidebarClosed = !isOpen;
    });
  }

}
