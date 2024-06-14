import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitDataService } from '../services/unit-data.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {
  id: number = 0;
  name: string = '';
  description: string = '';
  unitId: number | undefined;
  private UnitDataService = inject(UnitDataService);

  editUnit() {
    const newUnit = {
      abbreviation: this.name,
      description: this.description
    }
    this.UnitDataService.editUnit(newUnit,this.id);
  }


  constructor(private route: ActivatedRoute) {

  }
  loadUnitDetails(unitId: number) {
    this.id = unitId;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.unitId = Number(params.get('id'));
      this.loadUnitDetails(this.unitId);
    });
    
  }
}
