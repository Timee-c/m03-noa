import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSidebarOpen: boolean = true; // Inicialmente aberto

  constructor(private sidebarService: SidebarService) {
    // Inscreva-se no serviço para receber atualizações sobre o estado da barra lateral
    this.sidebarService.sidebarState.subscribe((isOpen: boolean) => {
      this.isSidebarOpen = !isOpen;
    });
  }

  toggleSidebar() {
    // Alterna o estado da barra lateral no serviço
    this.sidebarService.toggleSidebar();
  }
}
