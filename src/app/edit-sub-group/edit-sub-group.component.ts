import { Component, inject } from '@angular/core';
import { SubGroupDataService } from '../services/subGroup-data.service';
import { ActivatedRoute } from '@angular/router';
import { GroupDataService } from '../services/group-data.service';

@Component({
  selector: 'app-edit-sub-group',
  templateUrl: './edit-sub-group.component.html',
  styleUrls: ['./edit-sub-group.component.css']
})
export class EditSubGroupComponent {
  id: number = 0;
  name: string = '';
  description: string = '';
  selectedOption: number | undefined;
  private subGroupDataService = inject(SubGroupDataService);
  private groupDataService = inject(GroupDataService);

  editSubGroup() {
    const newSubGroup = {
      name: this.name,
      idGroup: this.selectedOption,
      description: this.description
    }
    this.subGroupDataService.editSubGroup(newSubGroup,this.id);
    console.log(newSubGroup)
  }
  getGroupsServiceData() {
    return this.groupDataService.groups;
  }

  constructor(private route: ActivatedRoute) {

  }
  loadUnitDetails(subGroupId: number) {
    this.id = subGroupId;
  }

  ngOnInit(): void {
    this.getGroupsServiceData();
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.loadUnitDetails(this.id);
    });
    
  }
}
