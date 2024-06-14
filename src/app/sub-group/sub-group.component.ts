import { Component, OnInit, inject } from '@angular/core';
import { SubGroupDataService } from '../services/subGroup-data.service';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.css']
})
export class SubGroupComponent implements OnInit{
  private subGroupDataService = inject(SubGroupDataService);
  id: number = 0;
  subGroups: any[] = [];
  ngOnInit(): void {
    this.subGroupDataService.getSubGroups();
  }

  deleteSubGroup(subGroupId: number) {
    this.subGroupDataService.removeSubGroup(subGroupId);
    this.ngOnInit();
    window.location.reload();
  }

  getSubGroupsServiceData() {
    return this.subGroupDataService.subGroups;
  }
}
