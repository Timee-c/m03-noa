import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isVisible: boolean = true; // Inicialmente visível

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarState.subscribe((isVisible: boolean) => {
      this.isVisible = isVisible;
    });
  }
  

  closeSidebarAndAddClassToHeader() {
    this.sidebarService.closeSidebar();
  }
}
