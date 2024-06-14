import { Component, inject } from '@angular/core';
import {UnitDataService} from '../services/unit-data.service'

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  private UnitDataService = inject(UnitDataService);

    name: string = '';
    description: string ='';
  

  postUnit() {
    const newUnit = {
      abbreviation: this.name,
      description: this.description
    }
    this.UnitDataService.addUnit(newUnit);
  }
}
