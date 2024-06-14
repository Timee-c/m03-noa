import { Component, inject } from '@angular/core';
import { UnitDataService } from '../services/unit-data.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  private unitDataService = inject(UnitDataService);
  id: number = 0;
  unities: any[] = [];
  ngOnInit(): void {
    this.unitDataService.getUnities();
  }

  deleteUnit(unitId: number) {
    this.unitDataService.removeUnit(unitId);
    this.ngOnInit();
    window.location.reload();
  }

  getUnitiesServiceData() {
    return this.unitDataService.unities;
  }
}
