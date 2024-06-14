import { Component, OnInit, inject } from '@angular/core';
import { GroupDataService } from '../services/group-data.service';
import { SubGroupDataService } from '../services/subGroup-data.service';



@Component({
  selector: 'app-add-sub-group',
  templateUrl: './add-sub-group.component.html',
  styleUrls: ['./add-sub-group.component.css']
})
export class AddSubGroupComponent implements OnInit {
  ngOnInit(): void {
    this.getGroupsServiceData();
  }
  private groupDataService = inject(GroupDataService);
  private subGroupDataService = inject(SubGroupDataService);

  name: string = '';
  description: string = '';
  selectedOption: number | undefined;

  getGroupsServiceData() {
    return this.groupDataService.groups;
  }
  postSubGroup() {
    if (this.selectedOption) {
      const newSubGroup = {
        name: this.name,
        description: this.description,
        idGroup: this.selectedOption


      }
      this.subGroupDataService.addSubGroup(newSubGroup);
    }
    
  }
}
