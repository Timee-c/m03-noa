import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isSidebarOpenSubject = new BehaviorSubject<boolean>(true); // Inicialmente aberto
  sidebarState: Observable<boolean> = this.isSidebarOpenSubject.asObservable();

  
  constructor() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1800) { // Defina o limite de largura da tela para minimização
        this.closeSidebar();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1800) { // Defina o limite de largura da tela para minimização
        this.openSidebar();
      }
    });
  }
  
  closeSidebar() {
    // Fecha a barra lateral
    this.isSidebarOpenSubject.next(false);
  }

  openSidebar() {
    // Fecha a barra lateral
    this.isSidebarOpenSubject.next(true);
  }

  toggleSidebar() {
    // Alterna o estado da barra lateral
    this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
  }
}
function closeSidebar() {
  throw new Error('Function not implemented.');
}

