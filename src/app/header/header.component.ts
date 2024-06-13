import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sidebarService: SidebarService) {
  }

  toggleSidebar() {
    // Alterna o estado da barra lateral no serviço
    this.sidebarService.toggleSidebar();
  }
}
