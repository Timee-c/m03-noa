import { Component, OnInit, inject } from '@angular/core';
import {GroupDataService} from '../services/group-data.service'
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  implements OnInit{
  private groupDataService = inject(GroupDataService);
  id: number = 0;
  groups: any[] = [];
  ngOnInit(): void {
    this.groupDataService.getGroups();
  }

  deleteGroup(groupId: number) {
    this.groupDataService.removeGroup(groupId);
    this.ngOnInit();
    window.location.reload();
  }

  getGroupsServiceData() {
    return this.groupDataService.groups;
  }
}
