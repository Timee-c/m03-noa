import { Component, inject } from '@angular/core';
import {GroupDataService} from '../services/group-data.service'

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {
  private groupDataService = inject(GroupDataService);


    name: string = '';
    description: string ='';
  

  postGroup() {
    const newGroup = {
      name: this.name,
      description: this.description
    }
    this.groupDataService.addGroup(newGroup);
  }
}
